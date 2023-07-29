var i = 1; // Inicializar i en 1
        var q = 1; // Inicializar q en 1

        function newOption() {
            i++;
            const preguntaActual = event.target.parentElement; // Obtener el elemento .pregunta actual
            const listaOpciones = preguntaActual.querySelector('ol'); // Usar querySelector en lugar de getElementById
            const nuevoLi = document.createElement('li');
            nuevoLi.innerHTML = `<input type="text" placeholder="Ingrese opción ${i}" class="form__input input--option">`;
            listaOpciones.appendChild(nuevoLi);
            console.log("valor de i:" + i);
        }

        function newQuestion() {
            q++;
            const preguntasDiv = document.getElementById("preguntas");
            const preguntaDiv = document.createElement("div");
            preguntaDiv.classList.add("pregunta");

            // Crea el contenido de la nueva pregunta
            const nuevaPregunta = `
                <h3>Pregunta 0${q}:</h3>
                <input type="text" placeholder="Ingresa una pregunta" class="form__input input--pregunta">
                <div class="opciones">
                    <ol type="a" id="opciones${q}">
                        <li><input type="text" placeholder="Ingrese opción 1" class="form__input input--option"></li>
                    </ol>
                    <input type="button" value="+ Añadir opción" class="button" onclick="newOption()">
                </div>
            `;
            preguntaDiv.innerHTML = nuevaPregunta;

            // Agregar la nueva pregunta al div de preguntas
            preguntasDiv.appendChild(preguntaDiv);
        }