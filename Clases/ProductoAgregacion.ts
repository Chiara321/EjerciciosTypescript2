class Producto {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    describir(): void {
        console.log(`Este es un producto de tipo ${this.tipo}`);
    }
}

export default Producto;
