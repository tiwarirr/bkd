const express = require('express')
const format = require('date-format')
app = express()
const PORT = 3000

socialdata={
    'name':'instagram',
    'followers':100,
    'follows':0,
    'date': format.asString('dd/MM/yyyy',new Date)
}

app.get("/api/vi/test/:id",(req,res)=>{
    token=req.params.id
    res.send(token)
})
app.get("/api/vi/test",(req,res)=>{
    res.json(socialdata)
})

app.listen(PORT,()=>{
    console.log(`server is listing on port ${PORT}`)
})