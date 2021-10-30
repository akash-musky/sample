const app = require('express')()
const express = require('express')
const dotenv = require('dotenv')

const cors = require('cors')
app.use(cors())
dotenv.config()
 const PORT = process.env.PORT || 5000

 app.get('/' ,(req,res)=>{

     res.send("Hello Backend!!")
 })

app.listen(
     PORT, 
     console.log( `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
// app.listen(process.env.PORT || 5000, console.log(`Server Running on ${process.env.NODE_ENV} mode PORT ${process.env.PORT || 5000}`))