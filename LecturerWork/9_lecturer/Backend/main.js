const express = require("express")
const connectToMongo = require("./db/connectToMongo")
const products = require("./schema/products")
const { isValidObjectId } = require("mongoose")
const cors = require("cors")
const app = express()

connectToMongo()
app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get("/products", async (req, res) => {
    let findAllProducts = await products.find()
    res.json(findAllProducts)
}) 

app.get("/products/:id", async(req, res)=>{
    let {id} = req.params
    console.log(id, "mongo id")
    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid mongo id"})
    }
    
    let findById = await products.findById(id)
    res.json(findById)
})

app.post("/products", async(req, res)=>{
    let {name,price,category,description} = req.body
    console.log(name)
    console.log(price)
    console.log(category)
    console.log(description)
    if(!name || !price || !category || !description){
        return res.status(400).json({message:"name, price, category and description is required field"})
    }
    let createProduct = await products.create({name,price, category, description})
    res.json(createProduct)
})

app.delete("/products/:id", async(req,res)=>{
    let{id} = req.params
    console.log(id, "mongo id")
    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid mongo id"})
    }
    
    let deleteProducts = await products.findByIdAndDelete(id)
    res.json(deleteProducts)
})

app.put("/products/:id", async(req,res)=>{
    let{id} = req.params
    let {name,price,category,description} = req.body

    console.log(id, "mongo id")
    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid mongo id"})
    }

    let updatedProduct = await products.findByIdAndUpdate(id,{name,price,category,description}, {new:true})
    res.json(updatedProduct)
})



app.listen(3001, ()=>{
    console.log("server running on http://localhost:3001")
})