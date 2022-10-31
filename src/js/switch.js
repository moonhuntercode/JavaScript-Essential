    function toggle(ID) {
        const button=document.getElementById('button1');
        var demo=document.getElementById(ID)
        if (demo.style.display=="none") {
            button.innerHTML="hide syntax"
            demo.style.display="block";
        }
     else if (demo.style.display="block"){
            button.innerHTML="show syntax";
            demo.style.display="none";
        }
    }

//problem #2
let edad=20
let mensaje=""
switch(edad ){
    case 14:mensaje="mensaje: eres menor de edad"
    break;
    case 20:mensaje="eres mayor de 19"
    break;
    default:
        mensaje="no introduciste edad"
}
console.log(mensaje);
