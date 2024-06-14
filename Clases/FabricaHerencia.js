"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fabrica {
    constructor(nombre) {
        this.nombre = nombre;
    }
    producir() {
        console.log(`${this.nombre} está produciendo`);
    }
}
exports.default = Fabrica;
