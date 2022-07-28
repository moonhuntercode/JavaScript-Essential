
const sumados = (n1, n2) => (n1 + n2)
const suma1 = sumados(2, 3)
console.log("suma de 2 parámetros:" + suma1);

const mensaje = nombre => {
    return 'hola soy ' + nombre
}
const resuldos = mensaje("puti")
console.log(resuldos)
const sumatres = (n = 9) => {

    console.log(n + 4);
}

/* si aquí al llamamos
la función y no ponemos parámetros
aquí abajo, solo imprimirá
en salida: 5 */

/* pero si hacemos dentro de
la llamada un número */
console.log("sin parámetro:");
sumatres();
console.log("parámetro en la llamada:");
sumatres(3);