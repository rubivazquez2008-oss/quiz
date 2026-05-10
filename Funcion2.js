function calificar() {

    // Definimos todas las respuestas correctas aqui.

    let respuestasCorrectas = {
        p1: "b",
        p2: "c",
        p3: "b",
        p4: "a",
        p5: "c",
        p6: "c",
        p7: "b",
        p8: "b",
        p9: "c",
        p10: "b"
    };

    //Variable, empieza en 0 y se irá incrementando por cada respuesta correcta.
    let puntos = 0;

    // Object.keys nos devuelve las preguntas(claves) en una lista ["p1", "p2", "p3", "p4"].
    // Contamos cuantas preguntas hay automaticamente con lemght.

    let total = Object.keys(respuestasCorrectas).length;

    // Bucle que recorre todas las preguntas(claves) una por una gracias a nuestra variable "pregunta", 1º pregunta vladra p1 y despues p2, asi consecutivamente.

    for (let pregunta in respuestasCorrectas) {

        //Busca en el HTML el input(respuesta) que hemos marcado de esa pregunta. el ${} equivale a el valor de la variable que esta dentro. ${p1}

        let seleccion = document.querySelector(`input[name="${pregunta}"]:checked`); 

        //(seleccion)Verifica que nuestro usuario haya elegido alguna opcion y lo sieguiente compara que lo elejido sea igual que la respuesta correcta.
        //Si la respues elejida es igual a la respuesta correcta se sumara un punto a la variable "puntos".

        if (seleccion && seleccion.value === respuestasCorrectas[pregunta]) {
            puntos++;
        }
    }

    // Busca un elemento en el HTML con el id "resultado", el boton. (innerHTML) Cambia su contenido para mostrar el puntaje

    document.getElementById("resultado").innerHTML =
        `Tu puntuación es: ${puntos}/${total}`; //Muestra cuántas respuestas correctas tuvo nuestro usuario con el final de las dos variables.

}
