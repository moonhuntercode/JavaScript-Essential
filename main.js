import './style.css'
import javascriptLogo from './javascript.svg'
import javascriptLogo2 from "./src/public/img/javascript-programming-language.webp"
import viteLogo from './src/public/vite.svg'
import htmlLogo from "./src/public/img/html-icon.png"
import { setupCounter } from './counter.js'
window.onload=()=>{
  var myVar;
  function myFunction() {
    var myVar = setTimeout(showPage, 1500);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".contenedorall").style.display = "none";
    document.querySelector(".contenedorall").style.display = "block";
    setTimeout(() => {
      document.querySelector(".animate-bottom").style.display="none";
      // document.getElementById("myDiv").style.display = "none";
    },3800);
    setTimeout(() => {
      document.getElementById("myDiv").style.display = "block";
      document.querySelector(".animate-bottom").style.display="block";
      
    },1290);
  
    const all=document.querySelector('.contenedorall')
    const all2=document.querySelector('#h1portada')
    all2.style.display='none';
    all2.style.display='block';
    all.style.display='none';
    all.style.display='block';
    
  }

  myFunction()
}



document.querySelector('#app').innerHTML = //html
`
  <div>
  <div id="loader"></div>
   

      
  




        
    <div style="display:none;" class="contenedorall">
        <section id="imagenportada">
            
            <h1 id="h1portada">BIENVENIDOS A MI PRACTICA DE JAVASCRIPT</h1>
            
        </section>

        <div style="display:none;" id="myDiv" class="animate-bottom">
        <h2>Tada!</h2>
            <p>espero disfrutes lo que ves &#128522;
                sigue bajando hacia abajo </p>
                
          </div>
          <br /><br />
        <h2>CONTENIDO DEL CURSO</h2>
        <p>Empezemos con la super portada con estilo periódico
            que creé,y espero les guste  &#128522;
        </p>
        <p>toque la imagen para los cursos correspondientes</p>
        <div class="contenedor_cursos">
            
            <a href="./src/views/pagina-html.html">
            <!-- //  target="_blank" -->
            <img src=${htmlLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="./src/views/pagina_javaScript.html" >
            <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
          </a>
          <h1>Hello Welcome!</h1>
      <hr />
        </div>
        <br><br><br>
        
<!-- /* INICIO DE VITE HOME*/ -->
    <div class="card">
    <button id="counter" type="button"></button>
  </div>


  </div>
  
  <p class="read-the-docs">
    Hola  ---------  querido ----  visitante
  </p>
    </div> 
    <!-- FIN DE CONTENEDOR -->



`

setupCounter(document.querySelector('#counter'))
