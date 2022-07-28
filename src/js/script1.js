import APP from './component1.js';
import { banana as platano, orange } from './component2.js';
console.log('export banana ', platano);
console.log('export orange ', orange);
console.log('export default ', APP);
/* o también podemos importar todo
en un solo objeto como abajo */
import * as fruits from './component2.js'
console.log('export * banana', fruits.banana);
console.log('export * orange', fruits.orange);
console.log("------------");
export const cesa=['ho','hola2']
export default cesa