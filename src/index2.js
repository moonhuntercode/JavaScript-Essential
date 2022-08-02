const path=require('path')
// vamos pidiendo al servidor http
const http = require('http')
//line 4: ejecutar el servidor en el
// puerto dado por el server
// o el puerto 3000
const express = require('express')
const app = express()
const port = process.env.PORT || 3100
// settings
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//rutas 
app.use(require('./routes/routes.routes'))
 
app.listen(
  process.env.PORT || port,
  console.log(`Server running at port http://localhost:${port}`)
  )