const { stringify } = require("ini")

let str='puto Inocencio'
function abbrevName(str){
    // hasta aquí recibe un string,
    // toma la inicial y la vuelve
    // mayuscula
   
    let arr2=str.substring(0,1)
    
    let buscaEspacio=str.indexOf(' ')
    let elementodespuesdeEspacio=str.charAt(buscaEspacio+1);
    arr2.toUpperCase()
    // code away
   
        // encontrar la posicion
        // con espacio,y capturar
        // la primer letra despues
        // del espacio
        // for(i=0;i<str.length;i++){const expRegular = /(\s{2,})/g;}
        
    return `${arr2.toUpperCase()}.${elementodespuesdeEspacio.toUpperCase()}`;
}
const mensaje2=abbrevName(str)
console.log(`la variable a evaluar es:${str}`)
console.log(`mensaje1: ${mensaje2}`)
function imprime(data){
    let msg=mensaje2
    
return msg
}
const data2=imprime(mensaje2)
console.log(data2.toUpperCase())
