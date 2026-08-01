const {Router} = require("express")
const postsModel = require("../models/posts.model")

const postsRouter = Router()

postsRouter.get("/", async(req, res)=>{
    const findPosts = await postsModel.find()

    res.json({message:"წარმატებით წამოვიღეთ პოსტები", data:findPosts})
})




module.exports = postsRouter