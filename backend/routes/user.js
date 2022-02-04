const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const {User, validate} = require("../models/userModel");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const config = require("config");
const auth = require("../middleware/auth")

//auth routes

router.post("/register", async (req, res) => {
   //validation 
   const {error} = validate(req.body);
   if(error) return res.status(400).send(error.details[0].message);
   //checks 
   let user = await User.findOne({username : req.body.username});
     if(user) return res.status (400).send("User already registered!");
    // submit user
   user = new User({
       username : req.body.username,
       password : req.body.password
   });
   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(user.password,salt);
    
   await user.save();

   const token = user.generateAuthToken();
   res.header('x-auth-token',token).send(_.pick(user,["_id","username"]));
});

router.post("/login", async (req,res)=>{
    //validation 
   const {error} = validate(req.body);
   if(error) return res.status(400).send(error.details[0].message);
   //checks 
   let user = await User.findOne({username : req.body.username});
     if(!user) return res.status(400).send("Invalid Email or Password!");
   const validPassword = await bcrypt.compare(req.body.password, user.password);
   if(!validPassword) return res.status(400).send("Invalid Email or Password!");
    
   //generating JWT
   const token = user.generateAuthToken();
   res.send(token);
});

// to get current user
router.get("/me", auth, async(req,res) =>{
    const user = User.findById(req.user._id).select('-password')
    res.send(user);
} )

module.exports = router;
 