let num = parseFloat(prompt("Introduce un número:"));

        if (num % 2 === 0) {
            document.write("El número es divisible por 2<br>");
        } else if (num % 3 === 0) {
            document.write("El número es divisible por 3<br>");
        } else if (num % 5 === 0) {
            document.write("El número es divisible por 5<br>");
        } else if (num % 7 === 0) {
            document.write("El número es divisible por 7<br>");
        } else {
            document.write("El número no es divisible por 2, 3, 5 o 7");
        }
