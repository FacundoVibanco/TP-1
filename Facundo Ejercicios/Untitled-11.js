let frase = prompt("Introduce una frase:");
let count = 0;

    for (let i = 0; i < frase.length; i++) {
        let c = frase[i].toLowerCase();
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        count++;
        }
    }

document.write("La frase tiene " + count + " vocales");
