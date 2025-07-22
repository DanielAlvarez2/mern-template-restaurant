const express = require('express')
const mongoose =require('mongoose')
const DinnerMenuItem = require('./models/DinnerMenuItem.js')

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
})()

app.post('/api/dinner', async(req,res)=>{
    try{
        const maxSequence = await DinnerMenuItem.findOne({section:req.body.section}).sort({sequence:-1})
        await DinnerMenuItem.create({
            section:req.body.section,
            name:req.body.name,
            description: req.body.description,
            price: req.body.price,
            sequence: maxSequence ? maxSequence + 1 : 1
        })
        console.log(`Added to Database: ${req.body.name}`)
        res.json(`Added to Database: ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

const PORT = process.env.PORT || 1243
app.listen(PORT, ()=> console.log(`Server Running on Port: ${PORT}`))