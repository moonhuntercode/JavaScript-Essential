'use strict';
//Parametros REST
function ListadoPaises(p1, p2, ...p) {
    console.log(p1);
    console.log(p2);
    console.log(p);
}
/* Usando parámetros REST podemos agregar el número
de parámetros que queramos */
ListadoPaises('España', 'Alemania', 'Irlanda', 'Perú', 'argentina');
