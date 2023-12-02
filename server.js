const express = require("express")
const { errorHandler } = require("./middleware/errorHandling")
const connectToDB = require('./Config/dbConnect')
const dotenv = require("dotenv").config()
const app = express()

const port = process.env.PORT 
connectToDB()
app.use(express.json()) 
app.use('/api/contact',require("./Routes/contactRoutes"))

app.use = (errorHandler)

app.listen(port,()=>{
   console.log(`server running on ${port}`)
})
