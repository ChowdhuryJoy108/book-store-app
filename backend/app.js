const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes")
const app = express();
const cors = require('cors')

//midleware

app.use(express.json());
app.use(cors());
app.use("/books", router)

mongoose.connect("mongodb+srv://admin:1u9rhHteWcl4VmaA@cluster0.krqkjt2.mongodb.net/?retryWrites=true&w=majority")

.then(()=>console.log("Connected to Database"))

.then(()=>{
    app.listen(5000)
})
.catch((err)=>console.log(err));







//Password = 1u9rhHteWcl4VmaA