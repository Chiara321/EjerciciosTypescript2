import Fabrica from './Clases/Fabrica';
import { Producto, ProductoEspecial } from './Clases/Producto';

const producto1 = new Producto('Juguete');
const producto2 = new Producto('Electrónica');
const productoEspecial = new ProductoEspecial('Alimento', 'Vegano y orgánico');

const fabrica = new Fabrica('Fábrica Central');
fabrica.agregarProducto(producto1);
fabrica.agregarProducto(producto2);
fabrica.agregarProducto(productoEspecial);

fabrica.producir();
