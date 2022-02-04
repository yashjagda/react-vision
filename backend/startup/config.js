const config = require("config");

module.exports = function(){
//JWT key check in config App will not work if false
if(!config.get('jwtPrivateKey')){
    throw new Error("Fatal Error : JWT Private key not defined!");
}
}