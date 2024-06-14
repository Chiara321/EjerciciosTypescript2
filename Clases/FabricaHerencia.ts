class Fabrica {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    producir(): void {
        console.log(`${this.nombre} está produciendo`);
    }
}

export default Fabrica;
