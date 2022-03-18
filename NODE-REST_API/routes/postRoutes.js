const express = require('express');
const Post = require("../models/Post.js")
const User = require("../models/User.js")
const Router = express.Router() ;


//Create New Post
Router.post('/' , async (req, res)=>{
   const newPost = new Post(req.body);
   try {
       const savePost = await newPost.save(); 
       res.status(200).json("New Post Created")
   } catch (error) {
       res.status(500).json("Some Error Occured")
   }
})


//Update A Post
Router.put('/:id' , async (req, res)=>{
    
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
           await  post.updateOne({$set: req.body})
            res.status(200).json("Post is Updated")
        } else {
            res.status(403).json("Some Error Occured")
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
 })


 //Delete A Post 
 Router.delete('/:id' , async (req, res)=>{
    
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
           await  post.deleteOne()
            res.status(200).json("Post is Deleted")
        } else {
            res.status(403).json("Some Error Occured")
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
 })

 //Like / Dislike A Post 

 Router.put('/:id/like' , async (req, res)=>{
     try {
         const post = await Post.findById(req.params.id)
         if (!post.likes.includes(req.body.userId)) {
             await post.updateOne({$push :{likes: req.body.userId}})
             res.status(200).json("Post have been liked") ;
             
         } else {
            await post.updateOne({$pull :{likes: req.body.userId}})
            res.status(200).json("Post have been disliked") ;
            
         }
         
     } catch (error) {
        
        res.status(500).json("Some Error Occured") ;
        
     }
 })



 //Get A Post 

 Router.get('/:id/' , async (req, res)=>{
     try {
         const post = await Post.findById(req.params.id)
         res.status(200).json(post);
         
     } catch (error) {
        
        res.status(500).json("Some Error Occured") ;
        
     }
 })


 //Get Timeline Post 
 Router.get('/timeline/:userId' , async(req, res)=>{
     try {
         const currentUser = await User.findById(req.params.userId)
         const userPost = await Post.find({userId : currentUser._id})
         const friendsPost = await Promise.all(
             currentUser.following.map((friendId)=>{
                return Post.find({userId : friendId})
         }));
         res.status(200).json(userPost.concat(...friendsPost))
     } catch (error) {
         res.status(500).json(error)
     }
 })


 //Get User ALl Posts 
 Router.get('/profile/:userName' , async(req, res)=>{
     try {
         const user = await User.findOne({userName : req.params.userName})
          if (!user) {res.status(404).json('UserNot FOund')}  
         const posts = await Post.find({userId : user._id})
        
         res.status(200).json(posts)
     } catch (error) {
         res.status(500).json(error)
     }
 })


module.exports = Router ; 