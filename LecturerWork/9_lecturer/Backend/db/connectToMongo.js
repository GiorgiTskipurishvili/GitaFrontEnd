const { default: mongoose } = require("mongoose")

module.exports = async() => {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.npl4on1.mongodb.net/?appName=Cluster0")
    console.log("connected succesfully")
}