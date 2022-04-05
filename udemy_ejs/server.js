const express = require("express")

const mongoose = require("mongoose")

const connect = ()=> {
    return mongoose.connect("mongodb://127.0.0.1:27017/Udemy_Clone")
}

const userController = require("./src/controller/user.controller")

const cartController = require("./src/controller/cart.controller")

const courseController = require("./src/controller/course.controller")



const app = express()



app.use(express.static("public")) // public 


app.set("view engine","ejs")   // view engine


app.use(express.json())

app.use("/api/",userController)



 // api for home page
app.get('/', (req, res)=>{
    res.render('home');
    });


 // api for  login page    
app.get('/login', (req, res)=>{
    res.render('login');
});


// api for signup page 
app.get('/signup', (req, res)=>{
    res.render('signup');
});

app.get('/login', (req, res)=>{
    res.render('login');
});


// api for signup page 
app.get('/signup', (req, res)=>{
    res.render('signup');
}); 




app.use("", cartController)
app.use("", courseController)






app.listen("6900",async () =>{
    await connect()
    console.log("Listening on port 6900")
})


