// Función que determina si una persona es mayor de edad o no
function esMayorDeEdad(edad) {
    // Utiliza un operador ternario para devolver un mensaje según la edad
    return edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.";
}

// Ejemplo de uso:
console.log(esMayorDeEdad(20)); // Salida: "Eres mayor de edad."
console.log(esMayorDeEdad(15)); // Salida: "No eres mayor de edad."
