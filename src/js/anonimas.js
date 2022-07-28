'use strict'
//funciones anonimas

function sumar(n1, n2, multiply) {
    var suma = n1 + n2;
    multiply(suma);

    return suma;
};
sumar(10, 30, function (z) {
    console.log('la suma es' + z);
    console.log('la multiplicación es ' + z * 2);
}
);