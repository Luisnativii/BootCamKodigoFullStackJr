class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    obtenerPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }
  
    definirPosicion(posicion: 'centrado' | 'derecha' | 'izquierda'): void {
        console.log(`El título se mostrará en la posición: ${posicion}`);
    }
  
    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }
}

const cabecera = new CabeceraPagina("Mi Página", "azul", "Arial");
cabecera.obtenerPropiedades();
cabecera.definirPosicion('centrado');
cabecera.imprimirPropiedades();
