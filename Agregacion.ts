import Fabrica from './Clases/FabricaAgregacion';
import Producto from './Clases/ProductoAgregacion';

const producto1 = new Producto('Juguete');
const producto2 = new Producto('Electrónica');

const fabrica = new Fabrica('Fábrica Central');
fabrica.agregarProducto(producto1);
fabrica.agregarProducto(producto2);
fabrica.producir();
