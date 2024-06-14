"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FabricaAgregacion_1 = __importDefault(require("./Clases/FabricaAgregacion"));
const ProductoAgregacion_1 = __importDefault(require("./Clases/ProductoAgregacion"));
const producto1 = new ProductoAgregacion_1.default('Juguete');
const producto2 = new ProductoAgregacion_1.default('Electrónica');
const fabrica = new FabricaAgregacion_1.default('Fábrica Central');
fabrica.agregarProducto(producto1);
fabrica.agregarProducto(producto2);
fabrica.producir();
