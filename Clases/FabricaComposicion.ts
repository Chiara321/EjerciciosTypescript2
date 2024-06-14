import Producto from './ProductoComposicion';

class Fabrica {
    nombre: string;
    producto: Producto;

    constructor(nombre: string, producto: Producto) {
        this.nombre = nombre;
        this.producto = producto;
    }

    producir(): void {
        console.log(`${this.nombre} está produciendo`);
        this.producto.describir();
    }
}

export default Fabrica;


