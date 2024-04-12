import express from 'express'
import os from 'os'

const app=express()
app.listen(8080)

app.get("/",(req,res)=>{
    // res.send(os.type())
    // res.send(os.homedir())
    // res.send(os.platform())
    // res.send(os.hostname())
})

