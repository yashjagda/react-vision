const winston = require("winston")
require("express-async-errors") //handles all the errors in async func


module.exports = function(){
winston.add(new winston.transports.File({ filename: 'logfile.log' }));

//handling uncaught exceptions
process.on('uncaughtException', (ex) => {
    console.log("Exception found!");
    winston.log('error', ex.message, ex);
    process.exit(1);
});

//handling uncaught rejected promises
process.on('unhandledRejection', (ex) => {
    console.log("Exception found!");
    winston.log('error', ex.message, ex);
    process.exit(1);
});

}