class Calculadora {
    // Método para sumar dos números
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar dos números
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir dos números
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }

    // Método para calcular la potencia de un número
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Método para calcular el factorial de un número
    factorial(n: number): number {
        if (n < 0) {
            throw new Error("No existe el factorial de un número negativo.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Ejemplo de uso:
const calculadora = new Calculadora();

console.log("Suma: " + calculadora.sumar(5, 3));         // 8
console.log("Resta: " + calculadora.restar(10, 4));      // 6
console.log("Multiplicación: " + calculadora.multiplicar(6, 7)); // 42
console.log("División: " + calculadora.dividir(15, 3));  // 5
console.log("Potencia: " + calculadora.potencia(2, 3));  // 8
console.log("Factorial de 5: " + calculadora.factorial(5)); // 120
