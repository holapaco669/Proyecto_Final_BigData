# ♻️ Clasificador de Residuos con Visión Artificial

Este es un proyecto final de Big Data que utiliza una Red Neuronal Convolucional (CNN) en el navegador para clasificar residuos sólidos en tiempo real y facilitar el reciclaje.

## 🚀 DEMOSTRACIÓN EN VIVO (Opción Recomendada)
Para probar la aplicación inmediatamente sin instalar nada, haga clic en el siguiente enlace. Esta versión corre directamente en los servidores de GitHub y garantiza el funcionamiento correcto de la cámara y el modelo.

👉 **(https://holapaco669.github.io/Proyecto_Final_BigData/)**

## 🚀 VIDEO EN YOUTUBE

👉 **(https://youtu.be/k0W90GBwD74)
---

## 📂 Descripción del Repositorio
Este repositorio contiene el código fuente completo del proyecto:
* `index.html`: La estructura de la interfaz de usuario.
* `style.css`: Los estilos visuales y diseño responsivo.
* `script.js`: La lógica que conecta la cámara web con el modelo de TensorFlow.js.
* `/model`: Carpeta que contiene los archivos binarios del modelo entrenado (`model.json`, `metadata.json`, `weights.bin`).

---

## ⚙️ Instrucciones de Ejecución Local (Opcional)

⚠️ **NOTA TÉCNICA IMPORTANTE:**
Si descarga este proyecto como ZIP y abre el archivo `index.html` con doble clic, **es probable que la cámara NO cargue**.

Esto no es un error del código, sino una **política de seguridad de los navegadores (CORS)** que impide cargar modelos de Inteligencia Artificial desde archivos locales (`file://`).

**Si desea ejecutarlo localmente en su computadora, es necesario usar un Servidor Local siguiendo estos pasos:**

1.  **Descargar:**
    Descargue este repositorio como ZIP y descomprímalo en su computadora.
2.  **Abrir con Servidor Local:**
    Para evitar el bloqueo de seguridad, debe abrir la carpeta usando un servidor.
    * **Opción A (Visual Studio Code - Recomendada):** Abra la carpeta del proyecto en VS Code, instale la extensión "Live Server", haga clic derecho en `index.html` y seleccione **"Open with Live Server"**.
    * **Opción B (Python):** Abra la terminal en la carpeta del proyecto y ejecute el comando: `python -m http.server`. Luego vaya a `localhost:8000` en su navegador.
3.  **Permisos:**
    Acepte el permiso para usar la cámara web cuando el navegador lo solicite.

---

**Desarrollado por:** Carlos Fabian Cruz Flores
**Proyecto Final de Big Data**
