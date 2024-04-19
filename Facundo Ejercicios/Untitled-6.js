let num1 = parseFloat(prompt("Introduce el primer número:"));
        let num2 = parseFloat(prompt("Introduce el segundo número:"));

        if (num1 > num2) {
            document.write("El mayor es: " + num1);
        } else if (num2 > num1) {
            document.write("El mayor es: " + num2);
        } else {
            document.write("Ambos números son iguales");
        }
