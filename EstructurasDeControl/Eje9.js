// Función que convierte Celsius a Fahrenheit y devuelve un mensaje basado en la temperatura en Fahrenheit
function convertirYEvaluarTemperatura(celsius) {
    // Convierte la temperatura de Celsius a Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;

    // Determina el rango de la temperatura en Fahrenheit y devuelve el mensaje correspondiente
    let mensaje;
    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit <= 96) {
        mensaje = "Temperatura alta";
    } else {
        mensaje = "Temperatura desconocida";
    }

    // Muestra la temperatura en Fahrenheit y el mensaje correspondiente
    return `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}\n${mensaje}`;
}

// Ejemplo de uso:
// Solicita al usuario que ingrese una temperatura en Celsius (simulado aquí como una constante)
const temperaturaCelsius = 20;

// Muestra el resultado de la conversión y la evaluación de la temperatura
console.log(convertirYEvaluarTemperatura(temperaturaCelsius));

// Salida esperada:
// Temperatura en Fahrenheit: 68.00
// Temperatura alta
