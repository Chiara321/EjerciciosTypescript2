import Fabrica from './Clases/FabricaHerencia';
import Producto from './Clases/ProductoHerencia';

const fabrica = new Fabrica('Fábrica Central');
fabrica.producir();

const producto = new Producto('Fábrica Central', 'Juguete');
producto.describir();
