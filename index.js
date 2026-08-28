const express = require("express")

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("successfully execute on verscel")
})

app.get('/api/users',(req,res)=>{
    res.json({
        message:"user data is fetched",
        data: {
            name:"Nouman aziz",
            fname: "Aziz Ur Rehman",
            Education:"Bs Computer Sciense",
            from: "Karak"
        }
    })
})

module.exports = app;