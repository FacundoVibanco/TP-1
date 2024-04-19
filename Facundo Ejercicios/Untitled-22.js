function calcularLetraDNI(numero) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const indice = numero % 23;
    return letras.charAt(indice);
    }

    let input;

    while (true) {
        input = prompt("Introduce un número de DNI:");

    if (input === null) {
        break; // Se sale del bucle cuando se pulsa "cancelar"
    }

    let dni = parseInt(input);

    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("El número de DNI debe estar entre 0 y 99999999. Inténtalo de nuevo.");
    } else {
        let letra = calcularLetraDNI(dni);
        document.write(`La letra del DNI ${dni} es: ${letra}<br>`);
    }
    }
