import Fabrica from './Clases/FabricaComposicion';
import Producto from './Clases/ProductoComposicion';

const producto = new Producto('Juguete');
const fabrica = new Fabrica('Fábrica Central', producto);
fabrica.producir();
