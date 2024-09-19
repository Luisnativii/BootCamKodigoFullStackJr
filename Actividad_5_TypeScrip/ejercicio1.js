var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    // Método para obtener el título, color y fuente
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente));
    };
    // Método para definir la posición del título
    CabeceraPagina.prototype.definirPosicion = function (posicion) {
        console.log("El t\u00EDtulo se mostrar\u00E1 en la posici\u00F3n: ".concat(posicion));
    };
    // Método para imprimir todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente));
    };
    return CabeceraPagina;
}());
// Ejemplo de uso:
var cabecera = new CabeceraPagina("Mi Página", "azul", "Arial");
cabecera.obtenerPropiedades();
cabecera.definirPosicion('centrado');
cabecera.imprimirPropiedades();
