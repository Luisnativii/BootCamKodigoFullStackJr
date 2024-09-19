class Cancion {
    titulo: string;
    genero: string;
    private autor: string; // Atributo privado

    // Constructor que recibe el título y el género de la canción
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Inicialización del atributo privado 'autor'
    }

    // Método setter para asignar el valor del autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método getter para obtener el valor del autor
    getAutor(): string {
        return this.autor;
    }

    // Método para mostrar los datos de la canción
    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.getAutor()}`);
    }
}

// Ejemplo de uso
const cancion1 = new Cancion("Imagine", "Rock");
cancion1.setAutor("John Lennon");

console.log("Datos de la canción:");
cancion1.mostrarDatos();
