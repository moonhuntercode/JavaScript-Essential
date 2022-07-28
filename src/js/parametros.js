'use strict'
let a1=prompt('Dime algo','escriba');
let a2=prompt('Dime otra cosa','anímate');
function Unirpalabras(n1,n2){
var palabraunida=n1+" "+n2;
return palabraunida;
}
var salida=Unirpalabras(a1,a2);
console.log(salida);