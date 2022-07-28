const   ITEMS=document.getElementsByClassName('itemsds');
console.log(`cantidad de clases: ${ITEMS.length}`);//4
console.log("primer clase:" ,ITEMS[3]);//4
//getElementsByClassName
 //Busca elemente con la clase,
// si no,devuelve un array
function myFunction() {
    var x = document.getElementsByClassName("items color");
    x[0].style.backgroundColor = "blueviolet";
    x[1].style.backgroundColor = "blueviolet";
    x[2].style.backgroundColor = "blueviolet";
    x[2].style.color = "white";

    console.log(`cantidad: ${x.length}`)
    console.log("primer elemento:" ,x[0]);//4
  }
