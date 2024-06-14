import { Producto } from "./Producto";

class Fabrica {
    nombre: string;
    productos: Producto[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.productos = [];
    }

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    producir(): void {
        console.log(`${this.nombre} está produciendo los siguientes productos:`);
        this.productos.forEach(producto => producto.describir());
    }
}

export default Fabrica;
