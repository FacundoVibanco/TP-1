let concatenacion = "";
        let input;

        while (true) {
            input = prompt("Introduce una cadena de texto:");

            if (input === null) {
                break; // Se sale del bucle cuando se pulsa "cancelar"
            }

            // Concatenar las cadenas de texto introducidas con un guión
            if (concatenacion === "") {
                concatenacion = input;
            } else {
                concatenacion += "-" + input;
            }
        }

        document.write("Las cadenas concatenadas son: " + concatenacion);