class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    // Constructor que recibe los atributos: nombre, cantidad, tipo de cuenta, y número de cuenta
    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    // Método para depositar dinero
    depositar(monto: number): void {
        if (monto < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += monto;
            console.log(`Se ha depositado correctamente $${monto}.`);
        }
    }

    // Método para retirar dinero
    retirar(valor: number): void {
        if (this.cantidad <= 0) {
            console.log("No hay saldo en la cuenta.");
        } else if (valor < 5) {
            console.log("La cantidad a retirar debe ser mayor a $5.00");
        } else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo en la cuenta para retirar esa cantidad.");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado $${valor}. Su saldo actual es $${this.cantidad}.`);
        }
    }

    // Método para mostrar los datos de la cuenta
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
}

// Ejemplo de uso:
const cuenta1 = new Cuenta("Luis Nativi", 100, "Cuenta de Ahorros", "1234567890");

console.log("Datos de la cuenta:");
cuenta1.mostrarDatos(); // Muestra nombre, tipo de cuenta y número de cuenta

// Intentar depositar una cantidad menor a $5.00
cuenta1.depositar(3); // Debería mostrar un mensaje de advertencia

// Depositar una cantidad válida
cuenta1.depositar(50); // Debería incrementar el saldo y mostrar un mensaje de éxito

// Intentar retirar una cantidad menor a $5.00
cuenta1.retirar(3); // Debería mostrar un mensaje de advertencia

// Retirar una cantidad válida
cuenta1.retirar(20); // Debería restar del saldo y mostrar el saldo restante

// Intentar retirar una cantidad mayor al saldo disponible
cuenta1.retirar(200); // Debería mostrar un mensaje de error por saldo insuficiente
