function myfunction1(){
    let a,texto
    a=document.getElementById("input1").value
    if(a==="10000"){
        texto="aprobado"
    }
    else{
        texto="no valido"
    }
    document.getElementById("demo1").innerHTML=texto

}
var numeros = [1, 2, 3, 4, 5]; suma = 1;
    numeros.forEach (function(numero){
        suma *= numero;
    }
    );
    console.log(suma);

    function grow(x){
        suma=1;
      x.forEach(function(xi){
        suma*=xi;
      });
        return (suma);
      }
     const prin=(d)=>{console.log(d);}
     prin(grow(numeros))
     const grow2=x=> x.reduce((a,b) => a*b);
     prin(grow2(numeros))
     var yourString = "/installers/";
     var result = yourString.substring(1, yourString.length-1);
     function removecha(str){
        if(str.length<=2){
            console.log(str);
        }
        else{
        str=str.slice(1,str.length-1);
            console.log(str);
        }
     }
     avv='pla';
     removecha(avv)
     function removeChar(str){
        //You got this!
       
               var str=str.slice(1,-1);
                   console.log(str);
             
       }
       removeChar(avv)