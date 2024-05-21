const cookieSession = require('cookie-session')
const express=require('express')
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require('passport')
require('dotenv').config();
const app=express()
app.use(cookieSession({
    name:"session",
    keys:["sam5423"],
    maxAge: 24 * 60 * 60 * 100
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin:"http://localhost:3000/",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

app.listen(5000,()=>{
    console.log('server is running')
})