const {Router} = require("express")
const usersModel = require("../models/users.model")
const { isValidObjectId } = require("mongoose")


const usersRouter = Router()

usersRouter.get("/", async (req, res)=>{
    const findAllUser = await usersModel.find()
    res.json({message:"გილოცავ შენ წარმატებით წამოიღე ინფორმაცია ბაზიდან", data: findAllUser})
})

usersRouter.get("/:id", async(req,res)=>{
    const {id} = req.params
    // console.log(id)
    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid id", data:null })
    }

    const findUserById = await usersModel.findById(id).select("-password")
    res.json({message:"გილოცავ შენ წარმატებით იპოვე ჩანაწერი ID-ის მიხედვით", data:findUserById})
})

usersRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    
    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid id", data:null })
    }

    const findByIdAndDeleteUser = await usersModel.findByIdAndDelete(id)

    res.json({message:"გილოცავ წარმატებით წაიშალა მონაცემი", data:findByIdAndDeleteUser})
})

usersRouter.put("/:id", async(req,res)=>{
    const {id} = req.params
    const {fullName, email} = req.body
    // console.log(fullName)
    // console.log(email)

    if(!isValidObjectId(id)){
        return res.status(400).json({message:"invalid id", data:null })
    }

    const findByIdAndUpdateUser = await usersModel.findByIdAndUpdate(id,{fullName, email})

    res.json({message:"გილოცავ შენ წარმატებითღ გაანახლე მონაცემი", data:findByIdAndUpdateUser})
})


module.exports = usersRouter