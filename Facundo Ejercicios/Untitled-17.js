let num = parseFloat(prompt("Introduce un número:"));

function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
        }
    return true;
    }

    if (esPrimo(num)) {
        document.write(`${num} es un número primo`);
    } else {
        document.write(`${num} no es un número primo`);
    }
