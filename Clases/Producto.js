"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoEspecial = exports.Producto = void 0;
class Producto {
    constructor(tipo) {
        this.tipo = tipo;
    }
    describir() {
        console.log(`Este es un producto de tipo ${this.tipo}`);
    }
}
exports.Producto = Producto;
class ProductoEspecial extends Producto {
    constructor(tipo, descripcion) {
        super(tipo);
        this.descripcion = descripcion;
    }
    describir() {
        console.log(`Este es un producto especial de tipo ${this.tipo} con la descripción: ${this.descripcion}`);
    }
}
exports.ProductoEspecial = ProductoEspecial;
