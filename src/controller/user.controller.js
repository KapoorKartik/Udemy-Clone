

const express = require("express")
const router = express.Router()


const Usersign = require("../models/user.model")

router.post("/signup", async(req,res) => {
    const reguser =  /^([a-zA-Z0-9\.-]+)\@([a-zA-Z0-9\-]+)\.([a-z]{2,20})$/

    if(!reguser.test(req.body.email)){
        res.status(400).send({message:"Invalid email address",error:true})
        return 
    }
    else {
        const userdata = await Usersign.find({email:req.body.email}).lean().exec()
        if(userdata.length){
            res.status(400).send({message:"email already exist", error:true})
            return
        }
        else {
            const user= await Usersign.create(req.body)
            res.status(201).send(user)
            return
        }
      
    }



})

router.post("/login",async(req,res) => {

    const userdata = await Usersign.find({email:req.body.email}).lean().exec()

    if(userdata.length){
        if(userdata[0].password === req.body.password) {
           // res.cookie("USER ID", userdata[0]._id.toString(), {httpOnly:true})
            res.status(200).send({})
        }
        else {
            res.status(403).send({message:"Wrong Password",error:true})
        }
    }
    else {
        res.status(403).send({meassage:"Email not found",error:true})
    }


})



module.exports = router



// router.get("", async(req,res) => {
//     const usersign = await Usersign.find()

//     return res.status(200).send(usersign)

// })

// router.patch("/:id", async(req,res) => {
//     const usersign = await Usersign.findByIdAndUpdate(req.params.id,req.body)

//     return res.status(200).send(usersign)

// })
// router.delete("/:id", async(req,res) => {
//     const usersign = await Usersign.findByIdAndDelete(req.params.id)

//     return res.status(200).send(usersign)

// })






// categoryschema = {
//     catgory_name:{},
//     title:{},
//     decription:{},
//     courses:[id,id,id]


// }

// courseschema = {
//     image:{type:Image}
//     title:
//     author:
//     rating:
//     price:{string}

// }

// signupschema 


// cartschema ={
//     userid:
//     courseid:[]
// }