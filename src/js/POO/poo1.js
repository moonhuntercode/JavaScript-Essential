// intro to programación orientada a objetos with javaScript
// para crear un objeto en js ,nosotros primero nesecitamos
// crear una variable con corchetes
const saiyayin = {
  name: "gohan",
  raza: "saiyayin",
  lvl: 10,
  age: 21,
};
// en este objeto,  name , age ,lvl,raza
// propiedades de el objeto,
// y los valores asignados a cada propiedad
// ,son valor de propiedad

console.log(saiyayin.raza + "-> line 14");
//with  bracket notation: esto
// sirve para acceder a los métodos

console.log(saiyayin["raza"]);
// constructor functions: nos permite
// crear objetos,y son usadas para
// crear múltiples instancias de
// mismo objeto, con las mismos propiedades
// y métodos
const Saiyayin = function (lvl, name, raza, age) {
  this.name = name;
  this.lvl = lvl;
  this.raza = raza;
  this.age = age;
  this.calcBirthYear = function () {
    return 2023 - this.age;
  };
};

// esto crea una instancia de el
// objeto y lo almacenA en saiyayinChildren
//
const saiyayinChildren = new Saiyayin(
  300,
  "victor code",
  "humana",
  22
);
console.log(saiyayinChildren.lvl);
console.log(saiyayinChildren.name);
console.log(saiyayinChildren.raza);
//  entonces= so...............
// adding methods to Constructor Functions
// i add   this.calcBirthYear = function () {
//         return 2023 - this.age;
//       };

console.log(saiyayinChildren.calcBirthYear());
