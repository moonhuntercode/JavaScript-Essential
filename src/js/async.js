 //entendiendo programacion asincrona
 fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(Response=>Response.json())
.then(json=>console.log(json))
.catch(e=>console.log(e)) 