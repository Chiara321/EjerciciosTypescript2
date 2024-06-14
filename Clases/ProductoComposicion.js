"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(tipo) {
        this.tipo = tipo;
    }
    describir() {
        console.log(`Este es un producto de tipo ${this.tipo}`);
    }
}
exports.default = Producto;
