let num = parseFloat(prompt("Introduce un número:"));

document.write(`Divisores de ${num}:<br>`);
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        document.write(i + "<br>");
    }
}
