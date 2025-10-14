function Person(name) {
    this.name = name;

}

let Person2= new Person('victor');
console.log(Person2);

class Anime {
    constructor(name,genre,chapters) {
        this.name = name;
        this.genre = genre;
        this.chapters = 12;
    }
}
let anime1= new Anime('Naruto','accion');

let anime2=new Anime('clevatess','action');

console.log(anime1.__proto__.constructor);

