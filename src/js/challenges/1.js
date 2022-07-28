/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.*/

var name="Reaven";
function namere (name){
    console.log('indice:'+name.charAt(0))
    
    var nam=name.charAt(0);
    console.log(typeof(nam) )
  
    if (nam === 'r' || nam === 'R') {
           name= `${name} plays banjo` ;
            
          } else {
         name= `${name} does not play banjo`;
          }
          return name;
}
var outpi=namere(name)
console.log(outpi)
// function imprime(namere){console.log();}