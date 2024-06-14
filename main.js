"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fabrica_1 = __importDefault(require("./Clases/Fabrica"));
const Producto_1 = require("./Clases/Producto");
const producto1 = new Producto_1.Producto('Juguete');
const producto2 = new Producto_1.Producto('Electrónica');
const productoEspecial = new Producto_1.ProductoEspecial('Alimento', 'Vegano y orgánico');
const fabrica = new Fabrica_1.default('Fábrica Central');
fabrica.agregarProducto(producto1);
fabrica.agregarProducto(producto2);
fabrica.agregarProducto(productoEspecial);
fabrica.producir();
