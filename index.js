require("dotenv").config()
const express= require("express")
const { connection } = require("./configuration/db")
const { SeatRouter } = require("./Routes/SeatRouter")
const app= express()
const cors= require("cors")


const PORT = process.env.port ||8080
app.use(cors())
app.use(express.json())


app.use("/", SeatRouter)


app.listen(PORT, async()=>{
    try{
        await connection
        console.log(`connected to DB using port ${PORT}`);
    }catch(err){
        console.log(err);
    }
})