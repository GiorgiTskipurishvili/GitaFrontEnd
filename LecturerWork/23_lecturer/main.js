const express =  require("express")
const ConnectToMongo = require("./db/connectTomongo")
const app = express()
const PORT = 3030
require("dotenv").config()
ConnectToMongo()

app.get("/",(req,res)=>{
    res.json({message:"გილოცავ წარმატებით დარესფონსდა"})
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})