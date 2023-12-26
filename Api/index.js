const express = require('express');
const app = express();
const cors = require("express-cors");
require("dotenv").config();

app.use(cors());

app.use(express.json())

const connectDB = require("./src/config/mongoDB")

const PORT = 3000;

app.get("/health", (req,res)=>{
    res.json({
        status: "health check is done!!",
    })
})

connectDB().then(()=>{
    console.log(`successfully connected to the mongoDB`)
    app.listen(PORT,()=>{
        console.log(`Server is connect to the http://localhost:${PORT}`)
    })
})
.catch((error)=>{
    console.log(`DB connection error `, error)
})