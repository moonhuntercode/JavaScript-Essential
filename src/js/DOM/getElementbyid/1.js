'use strict';
function changeColor(newColor){
    var elem=document.getElementById('test1');
    elem.style.color=newColor;
}
window.onload=()=>{
    let element2=document.getElementById('test1')
    element2.innerText=('best practices2 con carga de documento');
}
const cambiandoTexto=()=>{
    var elm=document.getElementById('test1');
    elm.innerText=('best practices con boton');
   console.log(elm)
}
