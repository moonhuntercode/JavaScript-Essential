'use strict'
//funciones anonimas

function sumar(n1, n2, multiply) {
    var suma = n1 + n2;
    multiply(suma);

    return suma;
};
/* a diferencia de callback anonima con function
declarado aquí abajo la podemos actualizar con
arrow function como véis aquí abajo, espero
os guste */
sumar(10, 30, z => {
    console.log('la suma es' + z);
    console.log('la multiplicación es ' + z * 2);
}
);