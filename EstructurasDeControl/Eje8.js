// Función que muestra la tabla de multiplicar del 1 al 10 para un número dado
function mostrarTablaMultiplicar(numero) {
    let tabla = ''; // Variable para almacenar la tabla de multiplicar

    // Genera la tabla de multiplicar desde 1 hasta 10
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }

    // Muestra la tabla en la consola
    console.log(tabla);
}

// Ejemplo de uso:
// Solicita al usuario que ingrese un número (simulado aquí como una constante)
const numeroIngresado = 7;

// Muestra la tabla de multiplicar del número ingresado
mostrarTablaMultiplicar(numeroIngresado);

// Salida esperada en la consola:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
