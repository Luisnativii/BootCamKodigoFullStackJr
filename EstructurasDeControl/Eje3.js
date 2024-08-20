// Función que calcula el aumento salarial de un trabajador según su categoría
function calcularAumento(nombre, salario, categoria) {
    let aumento;

    // Determina el porcentaje de aumento según la categoría del trabajador
    switch (categoria) {
        case 'A':
            aumento = salario * 0.15;
            break;
        case 'B':
            aumento = salario * 0.30;
            break;
        case 'C':
            aumento = salario * 0.10;
            break;
        case 'D':
            aumento = salario * 0.20;
            break;
        default:
            return `Categoría no válida para el empleado ${nombre}`;
    }

    // Calcula el nuevo salario
    let nuevoSalario = salario + aumento;

    // Retorna un mensaje con los datos del empleado y su aumento salarial
    return `Empleado: ${nombre}\nSalario Actual: ${salario}\nCategoría: ${categoria}\nAumento: ${aumento.toFixed(2)}\nNuevo Salario: ${nuevoSalario.toFixed(2)}`;
}

// Ejemplo de uso:
console.log(calcularAumento("María López", 1000, 'B'));
// Salida:
// Empleado: María López
// Salario Actual: 1000
// Categoría: B
// Aumento: 300.00
// Nuevo Salario: 1300.00
