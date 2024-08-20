// Función que calcula el descuento según el coche seleccionado
function calcularDescuentoCoche(coche) {
    let descuento;

    // Determina el porcentaje de descuento según el coche
    switch (coche) {
        case 'FORD FIESTA':
            descuento = 5;
            break;
        case 'FORD FOCUS':
            descuento = 10;
            break;
        case 'FORD ESCAPE':
            descuento = 20;
            break;
        default:
            return `No hay descuentos disponibles para el coche seleccionado: ${coche}`;
    }

    // Retorna un mensaje que muestra el coche seleccionado y el descuento aplicado
    return `Coche Seleccionado: ${coche}<br>Descuento Aplicado: ${descuento}%`;
}

// Ejemplo de uso:
// Selección del coche
const cocheSeleccionado = 'FORD FOCUS';

// Mostrar en HTML el resultado del descuento aplicado
document.write(calcularDescuentoCoche(cocheSeleccionado));
// Salida esperada en HTML:
// Coche Seleccionado: FORD FOCUS
// Descuento Aplicado: 10%
