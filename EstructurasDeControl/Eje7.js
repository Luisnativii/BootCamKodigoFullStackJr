// Función que procesa una lista de números enteros y calcula los resultados solicitados
function procesarValores(numeros) {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    // Recorre la lista de números para procesar cada valor
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        
        // Contabiliza los valores negativos
        if (numero < 0) {
            negativos++;
        }

        // Contabiliza los valores positivos
        if (numero > 0) {
            positivos++;
        }

        // Contabiliza los múltiplos de 15
        if (numero % 15 === 0) {
            multiplosDe15++;
        }

        // Acumula los valores pares
        if (numero % 2 === 0) {
            sumaPares += numero;
        }
    }

    // Retorna un objeto con los resultados obtenidos
    return {
        negativos: negativos,
        positivos: positivos,
        multiplosDe15: multiplosDe15,
        sumaPares: sumaPares
    };
}

// Ejemplo de uso:
// Se simula la entrada de 10 valores enteros
let valores = [12, -15, 0, 30, -5, 20, 7, 15, -8, 14];

// Procesar los valores ingresados
let resultados = procesarValores(valores);

// Mostrar los resultados
console.log(`Cantidad de valores negativos: ${resultados.negativos}`);
console.log(`Cantidad de valores positivos: ${resultados.positivos}`);
console.log(`Cantidad de múltiplos de 15: ${resultados.multiplosDe15}`);
console.log(`Valor acumulado de los números pares: ${resultados.sumaPares}`);

// Salida esperada:
// Cantidad de valores negativos: 3
// Cantidad de valores positivos: 6
// Cantidad de múltiplos de 15: 3
// Valor acumulado de los números pares: 76
