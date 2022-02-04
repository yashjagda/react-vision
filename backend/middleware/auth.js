const jwt = require("jsonwebtoken");
const config = require("config");

function auth(req,res,next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(400).send("Access Denied. Token Not Provided!");

    try {
        //payload is _id from MongoDB
        const payload = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = payload;
        next();
    } catch (ex) {
        res.status(401).send("Invalid Token");
    }
}

module.exports = auth;