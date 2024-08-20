// Función que calcula la nota final de un alumno
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    // Calcula la nota final basada en los porcentajes especificados
    let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    
    // Retorna un mensaje con los datos del alumno y su nota final
    return `Alumno: ${nombre}\nCarnet: ${carnet}\nNota Final: ${notaFinal.toFixed(2)}`;
}

// Ejemplo de uso:
console.log(calcularNotaFinal("Juan Pérez", "A12345", 80, 90, 100, 85)); 
// Salida:
// Alumno: Juan Pérez
// Carnet: A12345
// Nota Final: 87.50
