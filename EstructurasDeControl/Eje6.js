// Función que calcula el descuento según el destino de un viaje turístico
function calcularDescuentoViaje(origen, destino) {
    let descuento;

    // Verifica si el origen es Palma y determina el descuento basado en el destino
    if (origen === 'Palma') {
        switch (destino) {
            case 'La costa del Sol':
                descuento = 5;
                break;
            case 'Panchimalco':
                descuento = 10;
                break;
            case 'Puerto el Triunfo':
                descuento = 15;
                break;
            default:
                return `No hay descuentos disponibles para el destino seleccionado: ${destino}`;
        }
    } else {
        return `No hay descuentos disponibles para viajes desde ${origen}.`;
    }

    // Retorna un mensaje que muestra el destino y el descuento aplicado
    return `Origen: ${origen}<br>Destino: ${destino}<br>Descuento Aplicado: ${descuento}%`;
}

// Ejemplo de uso:
// Datos del viaje
const origenViaje = 'Palma';
const destinoViaje = 'Panchimalco';

// Mostrar en HTML el resultado del descuento aplicado
document.write(calcularDescuentoViaje(origenViaje, destinoViaje));
// Salida esperada en HTML:
// Origen: Palma
// Destino: Panchimalco
// Descuento Aplicado: 10%
