const express = require('express');
const User = require("../models/User.js")
const Router = express.Router() ;
const bcrypt = require('bcrypt');   


//Update A USer
Router.put('/:id' , async(req, res)=>{
  if (req.body.userId == req.params.id || req.user.isAdmin) {
      if(req.body.password){
          try {
              const salt = await bcrypt.genSalt(10); 
              req.body.password = await bcrypt.hash(req.body.password , salt)

          } catch (error) {
              return res.status(500).json(error)
          }
      }
      try {
          const user = await User.findByIdAndUpdate(req.params.id,{
              $set : req.body,
                }); 

        res.status(200).json("Account Have Been Updated")
      } catch (error) {
        return res.status(500).json(error)
      }
      
  } else {
    res.status(403).json("Some Error Occured")
  }
})


//Delete A USer
Router.delete('/:id' , async(req, res)=>{
    if (req.body.userId === req.params.id || req.body.isAdmin) {
       
     try {
            const user = await User.findByIdAndDelete(req.params.id); 
  
          res.status(200).json("Account Have Been Deleted")
        } catch (error) {
          return res.status(500).json(error)
        }
        
    } else {
      res.status(403).json("Some Error Occured")
    }
  })

//Get A USer
Router.get('/:id' , async(req, res)=>{
   
       
     try {
            const user = await User.findById(req.params.id); 
            const {password , updatedAt , ...other} = user._doc
  
          res.status(200).json(other)
        } catch (error) {
          return res.status(500).json(error)
        }
        
   
  })


//Follow A USer
Router.put("/:id/follow" , async(req, res)=>{
  if (req.body.userId !== req.params.id ) {
    try {
      const user = await User.findById(req.params.id); 
      const currentUser = await User.findById(req.body.userId); 
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({$push:{followers : req.body.userId }})
        await currentUser.updateOne({$push:{following : req.params.id}})
        res.status(200).json("User has been followed")
      } else {
        res.status(403).json('You Already Followed This User')
      }
      
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json('You cannot follow yourself')
  }
})


//Unfollow A USer
Router.put("/:id/unfollow" , async(req, res)=>{
  if (req.body.userId !== req.params.id ) {
    try {
      const user = await User.findById(req.params.id); 
      const currentUser = await User.findById(req.body.userId); 
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({$pull:{followers : req.body.userId }})
        await currentUser.updateOne({$pull:{following : req.params.id}})
        res.status(200).json("User has been unfollowed")
      } else {
        res.status(403).json('You dont follow this user')
      }
      
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json('You cannot unfollow yourself')
  }
})





Router.get('/' , (req, res)=>{
    res.send("USer Routers")
})

module.exports = Router ; 