const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const { boolean } = require("joi");

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    isAdmin:Boolean
});

UserSchema.methods.generateAuthToken = function(){
    //this._id is user._id from MongoDB as payload
    const token = jwt.sign({_id : this. _id, isAdmin: this.isAdmin},config.get('jwtPrivateKey'));
    return token;
}

const validateUser = (user) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(3).max(20).required()
    });
    return schema.validate(user);
}


exports.User = mongoose.model("User", UserSchema);
exports.validate = validateUser;


