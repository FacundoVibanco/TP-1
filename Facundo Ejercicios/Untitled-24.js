let n = parseInt(prompt("Introduce un número:"));

        for (let i = n; i >= 1; i--) {
            let linea = "";
        for (let j = 0; j < i; j++) {
            linea += i;
        }
        document.write(linea + "<br>");
        }
