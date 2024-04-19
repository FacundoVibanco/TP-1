let frase = prompt("Introduce una frase:");
let vocales = "";

    for (let i = 0; i < frase.length; i++) {
        let c = frase[i].toLowerCase();
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        vocales += frase[i] + " ";
        }
    }

document.write("Las vocales que aparecen son: " + vocales);
