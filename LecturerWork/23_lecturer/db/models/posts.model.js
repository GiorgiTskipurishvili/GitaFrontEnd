const { default: mongoose } = require("mongoose");

const postsSchema = new mongoose.Schema({
    title:{
        type:String
    },
    desc:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types, ref:"user"
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("post",postsSchema)