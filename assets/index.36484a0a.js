const i=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};i();const a="/assets/javascript.8dac5379.svg",c="/assets/html-icon.6e4c500b.png";function d(l){let o=0;const n=s=>{o=s,l.innerHTML=`count is ${o}`};l.addEventListener("click",()=>n(++o)),n(0)}window.onload=()=>{function l(){setTimeout(o,1500)}function o(){document.getElementById("loader").style.display="none",document.querySelector(".contenedorall").style.display="none",document.querySelector(".contenedorall").style.display="block",setTimeout(()=>{document.querySelector(".animate-bottom").style.display="none"},3800),setTimeout(()=>{document.getElementById("myDiv").style.display="block",document.querySelector(".animate-bottom").style.display="block"},1290);const n=document.querySelector(".contenedorall"),s=document.querySelector("#h1portada");s.style.display="none",s.style.display="block",n.style.display="none",n.style.display="block"}l()};document.querySelector("#app").innerHTML=`
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
        <p>Empezemos con la super portada con estilo peri\xF3dico
            que cre\xE9,y espero les guste  &#128522;
        </p>
        <p>toque la imagen para los cursos correspondientes</p>
        <div class="contenedor_cursos">
            
            <a href="./src/views/pagina-html.html">
            <!-- //  target="_blank" -->
            <img src=${c} class="logo" alt="Vite logo" />
          </a>
          <a href="./src/views/pagina_javaScript.html" >
            <img src="${a}" class="logo vanilla" alt="JavaScript logo" />
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



`;d(document.querySelector("#counter"));
