const express = require("express")

const app = express()

const PORT = 3030
app.use(express.json());


const employees = [
    {
        id:1,
        first_name: "John",
        last_name: "Doe",
        position: "Developer",
        salary: 2500
    },
    {
        id:2,
        first_name: "Lana",
        last_name: "Doe",
        position: "Designer",
        salary: 2000
    },
    {
        id:3,
        first_name: "Sam",
        last_name: "Smith",
        position: "Frotend Developer",
        salary: 2200
    },
    {
        id:4,
        first_name: "Anastasia",
        last_name: "Backam",
        position: "Data Analys",
        salary: 2500
    },
    {
        id:5,
        first_name: "Josh",
        last_name: "White",
        position: "Data Sciencst",
        salary: 2600
    }
]

app.get("/", (req,res)=>{
    res.json({message:"This is Employee API"})
})

app.get("/employees",(req,res)=>{
    let {page,take} = req.query
    take > 3 ? take = 3 : take 
    res.json(employees.slice((page-1)*take, page*take))
})

app.get("/employees/:id",(req,res)=>{
    let {id} = req.params

    const findEmployeeById = employees.find(el=> el.id === Number(id))

    if(!findEmployeeById){
        return res.status(404).json({message:"Id is invalid!!!"})
    }

    res.json({data:findEmployeeById})
})

app.post("/employees", (req, res)=>{
    const {first_name, last_name, position, salary} = req.body

    const lastId = employees[employees.length-1]?.id || 0

    let newEmployee = {
        id:lastId + 1,
        first_name: first_name,
        last_name:last_name,
        position:position,
        salary: salary
    }

    employees.push(newEmployee)

    res.json({message:"წარმატებით დაემატა", data:employees})
})

app.delete("/employees/:id",(req,res)=>{
    let {id} = req.params

    const index = employees.findIndex(el => el.id === Number(id))

    if (index === -1){
        return res.status(404).json({message:"id is invalid"})
    }

    let deletedEmployee = employees.splice(index,1)
    res.json({message:"წარმატებით წაიშალა",data:deletedEmployee})
})

app.put("/employees/:id",(req,res)=>{
    let {id} = req.params
    const {first_name, last_name, position, salary} = req.body
    
    const index = employees.findIndex(el=> el.id === Number(id))

    if(index === -1){
        return res.status(404).json({message:"Id is invalid"})
    }

    employees[index] = {
        ...employees[index],
        first_name:first_name || employees[index].first_name,
        last_name:last_name || employees[index].last_name,
        position:position || employees[index].position,
        salary:salary || employees[index].salary
    }

    res.json({message:"წარმატებით განახლდა", data:employees[index]})
})

app.get("/secret",(req,res)=>{
    const admin = req.headers.admin
    
    if(admin !== "admin"){
        return res.status(403).json({message:"Access denied"})
    }

    // res.json({secret:"ეს არის საიდუმლო ინფორმაცია"})

    const secretData = employees.map(employees => ({
        id: employees.id,
        first_name: employees.first_name,
        lastId: employees.last_name,
        position: employees.position,
        salary: employees.salary
    }))

    res.json({message:"ეს არის საიდუმლო ინფორმაცია", data:secretData})
})

app.listen( PORT, ()=>{
    console.log(`Server running on http:/localhost:${PORT}`)
} )
