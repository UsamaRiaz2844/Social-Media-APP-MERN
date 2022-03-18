const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const helmet = require('helmet'); 
const morgan = require('morgan'); 
const path = require('path'); 
const userRoutes = require('./routes/userRoutes.js'); 
const authRoutes = require('./routes/authRoutes.js'); 
const postRoutes = require('./routes/postRoutes.js'); 

const app = express(); 
dotenv.config(); 

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("MongoDB Connected")
});

//Middleware
app.use(express.json()); 
app.use(helmet()); 
app.use(morgan('common')); 


app.use('/api/user' , userRoutes);
app.use('/api/auth' , authRoutes);
app.use('/api/post' , postRoutes);


app.listen(8800 , ()=>{
    console.log("Backend server is running")
})