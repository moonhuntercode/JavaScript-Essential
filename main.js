// import './style.css'
// import javascriptLogo from './javascript.svg'
// import javascriptLogo2 from "./src/public/img/javascript-programming-language.webp"
// import viteLogo from './src/public/vite.svg'
// import htmlLogo from "./src/public/img/html-icon.png"
// import { setupCounter } from './counter.js'

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



// document.querySelector('#app').innerHTML = //html
// `
// `

setupCounter(document.querySelector('#counter'))
