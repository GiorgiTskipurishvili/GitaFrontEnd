const express =  require("express")
const ConnectToMongo = require("./db/connectTomongo")
const usersRouter = require("./routes/user.router")
const authRouter = require("./auth/auth.router")
const postsRouter = require("./routes/posts.route")
const isAuth = require("./middlewares/isAuth.middleware")
const app = express()
const PORT = 3030
app.use(express.json())
require("dotenv").config()
ConnectToMongo()

app.use("/users", usersRouter)
app.use("/auth", authRouter)
app.use("/posts", isAuth, postsRouter)


app.get("/",(req,res)=>{
    res.json({message:"გილოცავ წარმატებით დარესფონსდა"})
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

