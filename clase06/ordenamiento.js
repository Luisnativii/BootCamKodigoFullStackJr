let notas = [7, 8, 6.5, 5, 4, 9, 8.2];
let aprobados = [];
let recuperacion = [];
let reprobados = [];

for (let nota of notas) {
    if (nota >= 7) {
        aprobados.push(nota);
    } else if (nota >= 5 && nota < 7) {
        recuperacion.push(nota);
    } else {
        reprobados.push(nota);
    }
}

console.log("Alumnos aprobados: " + aprobados.length);
console.log("Notas de aprobados: " + aprobados);
console.log("Alumnos en recuperación: " + recuperacion.length);
console.log("Notas de recuperación: " + recuperacion);
console.log("Alumnos reprobados: " + reprobados.length);
console.log("Notas de reprobados: " + reprobados);
