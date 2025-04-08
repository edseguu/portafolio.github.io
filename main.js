



/**
 * Función para mostrar un texto con efecto máquina de escribir en un elemento.
 * @param {HTMLElement} elemento - El elemento HTML donde escribir.
 * @param {string} texto - El texto a escribir.
 * @param {number} velocidad - Milisegundos por caracter.
 * @returns {Promise<void>} - Promesa que se resuelve cuando el texto termina de escribirse.
 */
function escribirTextoSimple(elemento, texto, velocidad) {
    return new Promise((resolve) => {
      let i = 0;
      elemento.innerHTML = '';
      const cursor = document.createElement('span');
      cursor.className = 'cursor-maquina';
      elemento.appendChild(cursor);
  
      function escribirCaracter() {
        if (i < texto.length) {
          elemento.insertBefore(document.createTextNode(texto.charAt(i)), cursor);
          i++;
          setTimeout(escribirCaracter, velocidad);
        } else {
          resolve(); // Resuelve la promesa cuando el texto está completo
        }
      }
  
      setTimeout(escribirCaracter, velocidad);
    });
  }
  
  /**
   * Función para mostrar una secuencia de textos con efecto máquina de escribir.
   * @param {HTMLElement} elemento - El elemento HTML donde escribir.
   * @param {string[]} textos - Un array de strings a mostrar en secuencia.
   * @param {object} opciones - Opciones: { velocidad, pausaEntreTextos, loop }
   */
  async function secuenciaMaquinaEscribir(elemento, textos, opciones = {}) {
    const {
      velocidad = 75,
      pausaEntreTextos = 1500,
      loop = false,
    } = opciones;
  
    let indiceTextoActual = 0;
  
    async function mostrarSiguienteTexto() {
      if (indiceTextoActual < textos.length) {
        const textoActual = textos[indiceTextoActual];
        await escribirTextoSimple(elemento, textoActual, velocidad);
        indiceTextoActual++;
  
        if (indiceTextoActual < textos.length) {
          await new Promise((resolve) => setTimeout(resolve, pausaEntreTextos));
          mostrarSiguienteTexto();
        } else if (loop) {
          indiceTextoActual = 0;
          await new Promise((resolve) => setTimeout(resolve, pausaEntreTextos));
          mostrarSiguienteTexto();
        } else {
          // Opcional: Ocultar el cursor final
          const cursorFinal = elemento.querySelector('.cursor-maquina');
          if (cursorFinal) {
            cursorFinal.style.animation = 'none';
            cursorFinal.style.backgroundColor = 'transparent';
          }
          console.log("Secuencia completada.");
        }
      }
    }
  
    mostrarSiguienteTexto();
  }
  
  // --- Cómo usarlo ahora ---
  const elementoDialogo = document.getElementById('dialogo');
  if (elementoDialogo) {
      const misTextos = [
          "Hola, mi nombre es Eduardo Segura...",
          "Soy Ingeniero de Software....",
          "Me gusta el AR y VR...",
          "Me gusta la ciberseguridad...",
          "                               "
      ];
  
      function iniciarSecuencia() {
          secuenciaMaquinaEscribir(elementoDialogo, misTextos, {
              velocidad: 60,
              pausaEntreTextos: 2000,
              loop: false
          });
      }
  
      document.addEventListener('DOMContentLoaded', iniciarSecuencia);
  } else {
      console.error("El elemento con ID 'dialogo' no existe en el DOM.");
  }

  document.addEventListener('DOMContentLoaded', iniciarSecuencia);














 // Enlaces a redes sociales, correo, etc.. --------------------------------------------
 //-------------------------------------------------------------------------------------


 function github(){
  window.open("https://github.com/edseguu")
 }

 function correo(){
  window.open("mailto:segura2011@live.com")
 }
 function linkedin(){
  window.open("https://www.linkedin.com/in/eduardosegura0102")
 }
 function X(){
  window.open("https://x.com/Eduardo49266556")
 }
 
 function pagInicio(){
  window.location.href = "index.html";
 }

 function pagContacto(){
  window.location.href = "pagContacto.html";

 }

 function pagCertificados(){
  window.location.href = "certificados.html";

 }

 function pagProyectos(){
  window.location.href = "proyectos.html";

 }







 let popup = document.getElementById("popupProyectos");
 let containerReels = document.getElementById("containerReels")
 let containerProyectos = document.getElementById("contenedorPrincipal")

 let titulo = document.getElementById("tituloPopup")
 let containerTriangulo = document.getElementById("containerTriangulos")

 function abrirPopup(elementoDiv){

  popup.showModal();
  // Ahora 'elementoDiv' contendrá el div con el ID "proyecto1" cuando se haga clic en él.
  const tituloProyecto = elementoDiv.dataset.titulo;
  titulo.textContent = tituloProyecto


  const imgOriginal = document.getElementById("container");
  const imgDiv = imgOriginal.querySelector("img");
  const rutaImagen = elementoDiv.dataset.imagen;

  imgDiv.src = rutaImagen;

  const descripcionProyectos = {
    "proyecto1": {
      "descripcion": "Este es un proyecto de ejemplo 1."
    },
    "proyecto2": {
      "descripcion": "Este es un proyecto de ejemplo 2."
    },
    "proyecto3": {
      "descripcion": "Este es un proyecto de ejemplo 3."
    },
    "proyecto4": {
      "descripcion": "Este es un proyecto de ejemplo 4."
    },
    "proyecto5": {
      "descripcion": "Este es un proyecto de ejemplo 5."
    },
    "proyecto6": {
      "descripcion": "Este es un proyecto de ejemplo 6."
    },
    "proyecto7": {
      "descripcion": "Este es un proyecto de ejemplo 7."
    },
    "proyecto8": {
      "descripcion": "Este es un proyecto de ejemplo 8."
    },
    "proyecto9": {
      "descripcion": "Este es un proyecto de ejemplo 9."
    },
  }


  const descripcionOriginal = document.getElementById("descripcionProyecto");
  const descripcionDiv = descripcionOriginal.querySelector("h1");
  const descripcionNUeva = descripcionProyectos[elementoDiv.id].descripcion;
  descripcionDiv.textContent = descripcionNUeva;

  


  containerProyectos.style.filter = "blur(45px)";
  containerTriangulo.style.display = "none";
  containerReels.style.display = "none";





  // El resto de tu lógica para mostrar el popup...
}

function cerrarPopup(){
  popup.close();
  containerTriangulo.style.display = "block";
  containerReels.style.display = "block";
  containerProyectos.style.filter = "initial";
}


