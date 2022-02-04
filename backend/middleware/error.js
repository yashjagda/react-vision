const winston = require("winston");

module.exports = function(err,req,res,next){
    //winston levels
    // error, warn, info, verbose, debug, silly 
    winston.log('error', err.message, err);
    res.status(500).send("Something Failed!");
}