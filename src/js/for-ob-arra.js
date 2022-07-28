/* Aquí estamos iterando un array
muy interesante sus diferencia
usamos of en el for */
const fruitsArray = ["apple", "walele", "papaya"]
for (let value of fruitsArray) {
    console.log(value);
}
const fruitsObject = {
    apple: 13,
    orange: 17,
    banana: 15,
}
/* Aquí cambiamos el of por in
y reemplazamos value por key
para poder iterar el objeto */
for (let key in fruitsObject) {
    console.log(`objeto iterado: ${key}`)
}