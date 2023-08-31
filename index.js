const express = require("express")
const app = express()




app.get("/",(req,res)=>{
    res.send("you are welcome and what is your name")
})

const PORT = process.env.PORT || 4000



app.listen(PORT,()=>{
    console.log(`server is working ${PORT}`)
})