// Clase abstracta Persona
abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;

    // Constructor para inicializar los atributos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método que imprime si la persona es mayor de edad o no
    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }

    // Método abstracto para mostrar los datos personales
    abstract mostrarDatos(): void;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    sueldo: number;

    // Constructor que recibe todos los atributos de Persona más el sueldo
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad); // Llamada al constructor de la clase base (Persona)
        this.sueldo = sueldo;
    }

    // Método para cargar el sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} ${this.apellido} es $${this.sueldo}.`);
    }

    // Implementación del método abstracto para mostrar los datos personales
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.esMayorDeEdad(); // Imprime si es mayor de edad o no
    }
}

// Ejemplo de uso
const empleado1 = new Empleado("Luis", "Nativi", "San Salvador", "+503 7205-3098", 22, 1200);

// Mostrar los datos del empleado
console.log("Datos del empleado:");
empleado1.mostrarDatos();

// Imprimir el sueldo del empleado
empleado1.imprimirSueldo();

// Cambiar el sueldo y volver a imprimirlo
empleado1.cargarSueldo(1500);
console.log("Después de un aumento:");
empleado1.imprimirSueldo();
