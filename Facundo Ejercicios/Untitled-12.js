let frase = prompt("Introduce una frase:");
        let vocales = {
            'a': 0,
            'e': 0,
            'i': 0,
            'o': 0,
            'u': 0
        };

        for (let i = 0; i < frase.length; i++) {
            let c = frase[i].toLowerCase();
        if (vocales.hasOwnProperty(c)) {
            vocales[c]++;
            }
        }

        for (let vocal in vocales) {
            document.write(`La vocal ${vocal} aparece ${vocales[vocal]} veces<br>`);
        }
