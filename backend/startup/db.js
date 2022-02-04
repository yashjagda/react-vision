const winston = require("winston")
const mongoose = require("mongoose")

module.exports = function(){
    //DB Conn
    mongoose
    .connect("mongodb://127.0.0.1:27017/vending_machine", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => winston.log('info',"Connected to DB!"));

}