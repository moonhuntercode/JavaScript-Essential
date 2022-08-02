const route=(event)=>{
  event=event || window.event;
  event.preventDefault();
  window.history.pushState({},"",event.target.href);
  handleLocation();
}
const routes={
  404:"../views/404.html",
"/":"/index.html",
"/jspages":"../views/pagina_javaScript.html",
"/htmlpages":"../views/pagina-html.html",

}

const handleLocation=async ()=>{
  const path=window.location.pathname;
  const route=routes[path] || routes[404];
  const html=await fetch(route).then((data)=>data.text());
  document.getElementById("app2").innerHTML=html;

}
window.onpopstate=handleLocation;
window.route=route; 
handleLocation();
