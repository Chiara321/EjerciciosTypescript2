"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FabricaComposicion_1 = __importDefault(require("./Clases/FabricaComposicion"));
const ProductoComposicion_1 = __importDefault(require("./Clases/ProductoComposicion"));
const producto = new ProductoComposicion_1.default('Juguete');
const fabrica = new FabricaComposicion_1.default('Fábrica Central', producto);
fabrica.producir();
