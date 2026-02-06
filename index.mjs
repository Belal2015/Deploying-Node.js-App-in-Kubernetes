import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res)=>{
    const message = `Hello World, I am Pod ${os.hostname()}`
    res.send(message)
})

app.get("/health", (req, res)=>{
    res.status(200).send("OK")
})
 
app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Web Server is listening at port ${PORT}`)
    console.log(os.hostname())
})