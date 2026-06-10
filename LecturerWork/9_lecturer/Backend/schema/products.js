const {Schema, default: mongoose} = require("mongoose");

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String
})

module.exports = mongoose.model("products", productsSchema)