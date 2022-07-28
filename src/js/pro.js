/* let cadena = "pariente";
console.log(cadena.length); */

/* MÉTODOS EN JS */
/**todos los metodos devuelven una cadena nueva, la cadena original no será modificada*/
// console.log("aquí volvemos en mayuscula todo: " + cadena + " a: " + cadena.toUpperCase());
// let cadenamayuscula = cadena.toUpperCase(); //aqui     guardamos la mayuscula en 1 variable


function functionstring1() {
    var a, texto;
    a = document.getElementById("imput1").value;
    if (isNaN(a) || a < 1 || a > 10) {
        texto = "input not valid";
    } else {
        texto = "perfect";
    }
    document.getElementById("reemplazado1").innerHTML = texto;


}
/** EMPEZANDO DARK MODE */
function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
}

function changecolorcorto() {
    document.getElementById("cambia-color").style.backgroundColor = "rgb(145, 0, 255)";
    document.getElementById("cambia-color").style.color = "rgb(255, 255, 255)";
    document.get
}

function functiondarklightmode() {
    var palanca = document.body;
    y = palanca.classNameList.toggle("dark-mode");

}

/*document.getElementById("span-darkmode-to-lightmode").innerHTML="light mode" */
/*function textlightmode(){
            var x=document.getElementById("button-dar-light");
            if(x.display==="dark mode"){
                x.display="light mode";
            }
        }
            function checkdarkmode(){
                var checkbox=document.getElementById("switch2");
                if(checkbox.checked ==true){
                   functiondarklightmode();
                }
            }
*/
/** TERMINANDO DARK MODE */


/* TEMPLATE STRINGS */ 
const nombrecito='puto'
    const apellido='putin'
    // clg es snipet que ayuda a escribir rapido
    // console.log(object);
    console.log('este es el '+nombrecito+' amo '+apellido);
    //haciendo uso de template string abajo
    console.log(`el ${nombrecito} amo apellida ${apellido} `);
    document.write(`imprimimos en consola ${nombrecito} q apell0ida ${apellido}`)
    
    
    /* TEMPLATE STRINGS FINALIZADO*/ 
    function formulario_1(){
        var a ,text;
        a=document.getElementById("dato_recibido1").value;
        var x=a.length;
    var cadenaInvertida="";
    while (x>=0) {
        cadenaInvertida+=a.charAt(x);
        x--;
    }
        document.getElementById("texto_reemplazado1").innerHTML=cadenaInvertida;
        
        }
        
        // FUNCION DE INVERTIR CARACTERES
 
function invertir(cadena){
    var x=cadena.length;
    var cadenaInvertida="";
    while (x>=0) {
        cadenaInvertida+=cadena.charAt(x);
        x--;
    }
    return cadenaInvertida;
}
str_cadena="hola putos";
mos=()=>{ console.log( invertir(str_cadena))}
mos()