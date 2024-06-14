class Producto {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    describir(): void {
        console.log(`Este es un producto de tipo ${this.tipo}`);
    }
}

class ProductoEspecial extends Producto {
    descripcion: string;

    constructor(tipo: string, descripcion: string) {
        super(tipo);
        this.descripcion = descripcion;
    }

    describir(): void {
        console.log(`Este es un producto especial de tipo ${this.tipo} con la descripción: ${this.descripcion}`);
    }
}

export { Producto, ProductoEspecial };
