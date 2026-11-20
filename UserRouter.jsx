const express = require ("express");
const router = express.router();
const {SignupUser) = require("../Controlers/UserController");

router.post("/signup",SignupUser);

module.exports = routers;



