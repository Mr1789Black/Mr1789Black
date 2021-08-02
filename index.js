const port = process.env.port || 8080;
const express = require ("express")
const app= express ()

app.listen(port,()=>{
    console.log('Server running at '+ port )
})
app.get('/',(req,res)=>{
       return res.send("HELLO WORLD!")
})

module.exports = app