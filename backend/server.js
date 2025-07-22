const express = require('express')
const mongoose =require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

console.log(''); // SEMICOLON REQUIRED BEFORE IIFE!!!

(async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected')
    }catch(err){
        console.log(err)
    }
})

const PORT = process.env.PORT || 1243
app.listen(PORT, ()=> console.log(`Server Running on Port: ${PORT}`))