const {Router} = require("express")
const usersModel = require("../models/users.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const authRouter = Router()

authRouter.post("/sign-up", async(req, res)=>{
    const {fullName, email, password} = req.body
    
    if(!fullName || !email || !password){
        return res.status(400).json({message:"fullname email and password is require field"})
    }

    const existingUser = await usersModel.findOne({email:email})

    if(existingUser){
        return res.status(400).json({message:"ასეთი მომხმარებელი უკვე არსებობს, სცადე განსხვავებული ელფოსტა !!!"})
    }

    // console.log(password, "ჩვეულებრივი პაროლი")
    const hashedPass = await bcrypt.hash(password,10)
    // console.log(hashedPass, "დაჰეშილი პაროლი")

    await usersModel.create({fullName, email, password:hashedPass})
    res.json({message:"მომხმარებელი დაემატა წარმატებით"})
}) 

authRouter.post("/sign-in", async (req,res)=>{
    const {email, password} = req.body
    
    if(!email || !password){
        return res.status(400).json({message:"email and password is require field"})
    }

    const existingUser = await usersModel.findOne({email:email})

    if(!existingUser){
        return res.status(400).json({message:"ასეთი მომხმარებელი არ არსებობს, გაიარე sign-up"})
    }

    const isEqualPass = await bcrypt.compare(password, existingUser.password)
    // console.log(isEqualPass)

    if(!isEqualPass){
        return res.status(400).json({message:"Ivalid Credentals"})
    }

    const payLoad={
        userId:existingUser._id
    }

    const token = jwt.sign(payLoad, process.env.JWT_SECRET,{expiresIn:"1h"})

    // console.log(token)
    res.json({message:"ტოკენი", data:token})
})



module.exports = authRouter