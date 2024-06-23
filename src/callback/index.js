// Definimos una función 'sum' que toma dos números y retorna su suma.
// Esta función será utilizada como callback más adelante.
function sum(num1, num2) {
    return num1 + num2;
}

// Definimos una función 'calc' que toma dos números y una función (callback).
// Un callback es una función pasada como argumento a otra función.
function calc(num1, num2, sumNumbers) {
    // Llamamos al callback 'sumNumbers' pasando 'num1' y 'num2'.
    return sumNumbers(num1, num2);
}

// Llamamos a 'calc' con 2, 2, y 'sum' como callback.
// Esto ejecutará 'sum(2, 2)' que retorna 4, e imprime 4 en la consola.
console.log(calc(2, 2, sum));

// Usamos 'setTimeout' para ejecutar una función después de 5000 ms (5 segundos).
// El primer argumento es un callback (una función anónima en este caso).
setTimeout(function () {
    console.log('Hola JavaScript');
}, 5000);

// Definimos una función 'gretting' que toma un nombre y imprime un saludo.
// Esta función será utilizada como callback más adelante.
function gretting(name) {
    console.log(`Hola ${name}`);
}

// Usamos 'setTimeout' para ejecutar 'gretting' después de 2000 ms (2 segundos).
// 'gretting' es un callback y 'Orlando' es el argumento que se pasa.
setTimeout(gretting, 2000, 'Orlando');
