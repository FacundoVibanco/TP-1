let num1 = parseFloat(prompt("Introduce el primer número:"));
        let num2 = parseFloat(prompt("Introduce el segundo número:"));

        document.write(`Divisores comunes de ${num1} y ${num2}:<br>`);
        for (let i = 1; i <= Math.min(num1, num2); i++) {
            if (num1 % i === 0 && num2 % i === 0) {
                document.write(i + "<br>");
            }
        }
