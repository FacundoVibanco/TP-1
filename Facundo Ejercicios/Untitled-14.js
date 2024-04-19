let num = parseFloat(prompt("Introduce un número:"));

        document.write("El número es divisible por:");
        if (num % 2 === 0) {
            document.write(" 2");
        }
        if (num % 3 === 0) {
            document.write(" 3");
        }
        if (num % 5 === 0) {
            document.write(" 5");
        }
        if (num % 7 === 0) {
            document.write(" 7");
        }
