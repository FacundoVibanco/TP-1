let suma = 0;
        let input;

        while (true) {
            input = prompt("Introduce un número:");

        if (input === null) {
            break; // Se sale del bucle cuando se pulsa "cancelar"
        }

        let num = parseFloat(input);
        
        if (isNaN(num)) {
            alert("Lo introducido no es un número válido. Inténtalo de nuevo.");
        } else {
            suma += num;
            }
        }

        document.write("La suma total de los números introducidos es: " + suma);
