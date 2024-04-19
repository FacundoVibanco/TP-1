let contador = 0;

for (let i = 1; i <= 500; i++) {
    let output = i;

if (i % 4 === 0) {
    output += " (Múltiplo de 4)";
}

if (i % 9 === 0) {
    output += " (Múltiplo de 9)";
}

document.write(output + "<br>");
contador++;

if (contador % 5 === 0) {
    document.write("————————————————————<br>");
}
}
