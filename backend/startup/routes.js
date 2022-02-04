const error = require("../middleware/error");
const indexRoutes = require("../routes/index");
const userRoutes = require("../routes/user");
const express = require("express")

module.exports = function(app){
    //routes
    app.use('/api',indexRoutes);
    app.use('/api/auth/',userRoutes);

    //error middleware always at end of all routes
    app.use(error);
}