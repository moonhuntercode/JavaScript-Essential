window.onload=function () {
    const boton=document.getElementById('botonAjax')
    boton.addEventListener("click",function() {
        fetch("./hola.text").then(function(respuesta){
           return respuesta.text()
        }).then(function(texto){
            console.log(texto);
        });
    });
}   