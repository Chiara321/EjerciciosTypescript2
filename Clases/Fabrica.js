"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fabrica {
    constructor(nombre) {
        this.nombre = nombre;
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    producir() {
        console.log(`${this.nombre} está produciendo los siguientes productos:`);
        this.productos.forEach(producto => producto.describir());
    }
}
exports.default = Fabrica;
