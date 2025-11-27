const URL = "./model/";
let model, webcam, maxPredictions;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true; 
    webcam = new tmImage.Webcam(350, 350, flip); 
    await webcam.setup(); 
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-wrapper").appendChild(webcam.canvas);

    // Actualizar nombres al cargar
    updateBinLabels(); 
}

async function loop() {
    webcam.update(); 
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);

    let highestProb = 0;
    let bestClassIndex = 0;

    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability > highestProb) {
            highestProb = prediction[i].probability;
            bestClassIndex = i;
        }
    }

    // --- AQUÍ ACTUALIZAMOS EL TEXTO GRANDE DE ABAJO ---
    const classPrediction = prediction[bestClassIndex].className;
    const bigText = document.getElementById("big-prediction");

    // Solo actualizamos si la probabilidad es decente (para que no parpadee tanto)
    if (highestProb > 0.5) {
        bigText.innerText = classPrediction;
    } else {
        bigText.innerText = "Muestre un objeto...";
    }

    // Actualizar colores
    for (let i = 0; i < maxPredictions; i++) {
        let box = document.getElementById("clase" + i);
        if(box) box.classList.remove("active");
    }
    let activeBox = document.getElementById("clase" + bestClassIndex);
    if(activeBox) activeBox.classList.add("active");
}

function updateBinLabels() {
    // TUS ETIQUETAS EXACTAS DE TEACHABLE MACHINE
    const customLabels = [
        "Restos de alimentos, Cascaras",
        "Latas, Vidrio, Plastico, Carton",
        "Residuos sanitarios e higiénicos, Envolturas sucias",
        "Baterias, Electronicos, Medicamentos"
    ];

    for (let i = 0; i < maxPredictions; i++) {
        let binElement = document.getElementById("clase" + i);
        if (binElement && customLabels[i]) {
            let textSpan = binElement.querySelector('span');
            if(textSpan) textSpan.innerText = customLabels[i];
        }
    }
}

init();