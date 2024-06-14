"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FabricaHerencia_1 = __importDefault(require("./Clases/FabricaHerencia"));
const ProductoHerencia_1 = __importDefault(require("./Clases/ProductoHerencia"));
const fabrica = new FabricaHerencia_1.default('Fábrica Central');
fabrica.producir();
const producto = new ProductoHerencia_1.default('Fábrica Central', 'Juguete');
producto.describir();
