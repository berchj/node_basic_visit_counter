const express = require('express')
const app = express()
const port = 5100
const session = require('express-session')
app.use(session({secret:'token-muy-secreto',resave:true,saveUninitialized:true}))

app.get('/',(req,res)=>{
    let visitas = req.session.visitas
    if(visitas == undefined){
        visitas = 0
    }
    visitas += 1
    req.session.visitas = visitas
    res.send(`visitas : ${visitas}`)
})


app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})