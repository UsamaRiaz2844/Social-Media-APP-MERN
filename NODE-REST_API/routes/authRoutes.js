const express = require('express');
const User = require('../models/User')
const bcrypt = require('bcrypt'); 

const Router = express.Router() ;  


//Register
Router.post('/register' , async (req, res)=>{
    try {

        //Create hashed password
        const salt = await bcrypt.genSalt(10); 
        const hashPassword = await bcrypt.hash(req.body.password ,salt)
        
        //Create New User
        const newUser = new User({
            userName : req.body.userName, 
            email : req.body.email, 
            password: hashPassword
        })

        // save in database and response
       const user =  await newUser.save(); 
        res.status(200).json(user)
       
    } catch (error) {
        res.status(500).json(error)
    }

})


//Login
Router.post('/login' , async (req, res)=>{

try {
     const matchUser = await User.findOne({email:req.body.email})
     !matchUser && res.status(404).json("User Not Found")

     const passMatch = await bcrypt.compare(req.body.password , matchUser.password); 
     !passMatch &&  res.status(400).json("Password Not Match")

     res.status(200).json(matchUser)
} catch (error) {
   res.status(500).json(error)
}

})



module.exports = Router ; 