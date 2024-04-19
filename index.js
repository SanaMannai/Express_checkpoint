const express = require('express');
const userRouter = require('./routes/userRoute');

const app = express();

require('dotenv').config();
const port = process.env.PORT;

app.get("/",(req, res) =>{
    res.send({ Success: true, message: "data save successfully" })
})

// Set Pug as the view engine
app.set("views engine" , "pug");
app.set("views" , "./views");

// app.use(testDate);
app.use("/user", require("./middlwares/testDate"));

// app.use(userRouter);
// app.use("/user", require("./routes/userRoute"));

app.get('/',(req,res)=>{
    res.render("home")
})

// Start the server
app.listen(port ,(err)=>{
    if(err){
        console.log("can not run the server")
    }
    console.log("Server is running on port");
})