'use strict';
var a1 = prompt("Dame una", 'uno');
var a2 = prompt('Dame otra', 'otra');


function MostrarConsola(n1, n2) {
    console.log(n1 + " " + n2);
}


function EnDocumento(c1, c2) {
    document.write(c1 + " " + c2);
}


function Mostrar(a1, a2, a3 = false) {
    if (a3 == false) {
        MostrarConsola(a1, a2);
    }
    else {
        EnDocumento(a1, a2)
    }
}
function Mostrarotravez(n1, n2) {
    EnDocumento(n1, n2);
}
/* aquí comprobamos que
si no quiero no pongo
el false como parámetro
pero si quiero, sí
pero por eso entra en
el tema de parámetros
opcionales.
*/
// Mostrar(a1,a2); el tercer parametro se queda false

Mostrar(a1, a2, true);
/* aqui arriba cambiamos
el tercer parametro
a true imprimiendo
en el documento
con document.write */