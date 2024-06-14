"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fabrica {
    constructor(nombre, producto) {
        this.nombre = nombre;
        this.producto = producto;
    }
    producir() {
        console.log(`${this.nombre} está produciendo`);
        this.producto.describir();
    }
}
exports.default = Fabrica;
