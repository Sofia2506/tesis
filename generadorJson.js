// Creamos variables para almacenar los IDs de pregunta y opción
let idPregunta = 1;
let idOpcion = 1;

// Creamos un array para almacenar las preguntas y opciones ingresadas en el formulario
const preguntasArray = [];

function exportToJson() {
  const form = document.getElementById('form');
  const jsonData = {
    titulo: form.querySelector('.input--titulo').value,
    texto: form.querySelector('.input--texto').value,
    preguntas: [],
  };

  // Obtener todas las preguntas presentes en el formulario
  const preguntas = form.querySelectorAll('.pregunta');
  preguntas.forEach((preguntaDiv) => {
    const preguntaObj = {
      id_pregunta: idPregunta,
      pregunta: preguntaDiv.querySelector('.input--pregunta').value,
      opciones: [],
    };

    // Obtener todas las opciones para la pregunta actual
    const opciones = preguntaDiv.querySelectorAll('.input--option');
    opciones.forEach((opcionInput) => {
      const opcionObj = {
        id_opcion: idOpcion,
        texto_opcion: opcionInput.value,
      };
      preguntaObj.opciones.push(opcionObj);

      // Incrementar el ID de opción
      idOpcion++;
    });

    // Agregar la pregunta al array de preguntas en el JSON
    jsonData.preguntas.push(preguntaObj);

    // Reiniciar el ID de opción para la siguiente pregunta
    idOpcion = 1;

    // Incrementar el ID de pregunta
    idPregunta++;
  });

  // Convertir el objeto en una cadena JSON
  const jsonString = JSON.stringify(jsonData, null, 2);

  // Crear un Blob con el contenido JSON
  const blob = new Blob([jsonString], { type: 'application/json' });

  // Crear un enlace de descarga
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'data.json';
  downloadLink.click();
}
