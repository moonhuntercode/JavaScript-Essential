var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector(".contenedorall").style.display = "none";
  document.querySelector(".contenedorall").style.display = "block";
  setTimeout(() => {
    document.getElementById("myDiv").style.display = "block";
    document.querySelector(".animate-bottom").style.display="block";
    
  },1000);
  setTimeout(() => {
  document.querySelector(".animate-bottom").style.display="none";
  // document.getElementById("myDiv").style.display = "none";
},3000);
  const all=document.querySelector('.contenedorall')
  const all2=document.querySelector('#h1portada')
  all2.style.display='none';
  all2.style.display='block';
  all.style.display='none';
  all.style.display='block';
  
}