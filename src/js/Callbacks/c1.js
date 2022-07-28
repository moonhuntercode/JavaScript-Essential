// FUNCIÓN CALLBACK
// una  función callback es una función
// que se pasa a otra función como un
// argumento,que luego se invoca dentro de la función
// externa para completar algún tipo de rutina
// o acción
// EJEMPLO 1
function Resurrection(name){
    console.log(`Successfull resurrection of ${name}`)
}
function mensaje(callback){
    nombre='goku';
    callback(nombre) 
}
mensaje(Resurrection)