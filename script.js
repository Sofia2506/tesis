var i,q = 1;
function newOption(){
    i++;
    const listaOpciones = document.getElementById('opciones');
    const nuevoLi = document.createElement('li');
    nuevoLi.innerHTML = `<input type="text" placeholder="Ingrese opción ${i}" class="form__input input--option">`;
    listaOpciones.appendChild(nuevoLi);
    console.log("valor de i:"+i);
}

function newQuestion(){
    q++;
    const preguntasDiv = document.getElementById("preguntas");
    const preguntaDiv = preguntasDiv.querySelector(".pregunta");

    // Clonar la pregunta y su contenido
    const nuevaPregunta = preguntaDiv.cloneNode(true);

    // Limpiar el contenido del input de la nueva pregunta
    const inputPregunta = nuevaPregunta.querySelector(".input--pregunta");
    inputPregunta.value = "";

    const tituloPregunta = nuevaPregunta.querySelector("h3");
    tituloPregunta.textContent = `Pregunta 0${q}:`;
    console.log(nuevaPregunta);

    // Limpiar el contenido de las opciones de la nueva pregunta
    const opcionesDiv = nuevaPregunta.querySelector(".opciones");
    opcionesDiv.querySelector("ol").innerHTML = '<li><input type="text" placeholder="Ingrese opción 1" class="form__input input--option"></li>';

    // Agregar la nueva pregunta al div de preguntas
    preguntasDiv.appendChild(nuevaPregunta);
}