let frase = prompt("Introduce una frase:");
        let count = 0;

        for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'a') {
            count++;
            }
        }

        document.write("La letra 'a' aparece " + count + " veces");
