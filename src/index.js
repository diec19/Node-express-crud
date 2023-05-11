const express = require('express')
const mongosee = require('mongoose')
require("dotenv").config()
const userRoutes = require("./routes/user")

const app= express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api',userRoutes);

// routes
app.get('/',(req,res)=>{
    res.send("Welcome to my API");
})

//mongodb connection
mongosee.connect(process.env.MONGODB_URI)
.then(()=> console.log("conectado a mongo DB"))
.catch((error)=> console.log(error))

app.listen(9000,()=> console.log('server listeng on port',port))