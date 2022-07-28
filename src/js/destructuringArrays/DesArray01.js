// DESTRUCTURACIÓN DE ARREGLOS O ARRAY
// entendiendo la destructuracion
// de arrays cada variable que saquemos

const { array2 } = require("../import-export/exportando");

// const razas=['humana','orco','muerto viviente']
// // aqui la extraccion empieza desde 
// // el elemento con posición 0,en la 
// //extraccion asignarle cualquier
// // nombre es válido
// const[     v2,v3 ]=razas;
// //posicion  0, 1
// console.log(v2,v3);
// // en la extraccion de se puede
// // usar comas para descartar un
// // elemento for example:
// // aquí con la coma le decimos
// // a js que nesecitamos el elemento 
// // con posición 1 osea después del
// // primer elemento con posicion 0
// const [, p3]=razas;
// console.log("directoalsegundo:"+p3)
// console.log('--------------------------')


const comidas = ['Desayunar', 'Almorzar', 'Comer', 'Merendar', 'Cenar'];
//                  0,          1,          2,         3
comidas.forEach(function(comida, index) {
    console.log(`${index} : ${comida}`);
});
// encontrando el indice de un elemento
let pos = comidas.indexOf('Merendar')
console.log(`el indice es ${pos}`)
console.log('------------------')
const arr1=['valor'];
let arr2=arr1.toString()
console.log(`string:${arr2}`)
// aqui abajo imprimiremos letra con pos 1 al 2 de valor
console.log('-------01234')
console.log(`sacado: ${arr2.substring(0,1)}`)
let arrN=arr2.substring(0,1)
console.log(typeof(arrN))