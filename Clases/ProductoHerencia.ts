import Fabrica from './FabricaHerencia';

class Producto extends Fabrica {
    tipo: string;

    constructor(nombre: string, tipo: string) {
        super(nombre);
        this.tipo = tipo;
    }

    describir(): void {
        console.log(`El producto ${this.tipo} fue producido por ${this.nombre}`);
    }
}

export default Producto;
