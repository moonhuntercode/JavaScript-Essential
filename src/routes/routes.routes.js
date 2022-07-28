const express=require('express')
const router=express.Router()

router.get('/', function (req, res) {
    //  console.log( path.join(__dirname+'/node-practices/inicio.html') )
    // res.sendFile( path.join(__dirname+'/node-practices/inicio.html') )
  res.render(`index`)
  })

router.get('/contact',function(req,res){

    res.render('contact',{title:'contact page'})
})

  module.exports=router;