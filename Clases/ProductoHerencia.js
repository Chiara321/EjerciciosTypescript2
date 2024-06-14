"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FabricaHerencia_1 = __importDefault(require("./FabricaHerencia"));
class Producto extends FabricaHerencia_1.default {
    constructor(nombre, tipo) {
        super(nombre);
        this.tipo = tipo;
    }
    describir() {
        console.log(`El producto ${this.tipo} fue producido por ${this.nombre}`);
    }
}
exports.default = Producto;
