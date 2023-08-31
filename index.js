const express = require("express")
const app = express()
require("./config/db")
const cors = require('cors');
const Platoon = require('./Routes/Platoon')


app.get("/",(req,res)=>{
    res.send("you are welcome and what is your name")
})
app.use(express.json()); // For parsing JSON data in request bodies
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use("/", Platoon)


const PORT = process.env.PORT || 4000



app.listen(PORT,()=>{
    console.log(`server is working ${PORT}`)
})