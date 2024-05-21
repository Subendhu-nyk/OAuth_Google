const cookieSession = require('cookie-session')
const express=require('express')
const app=express()
app.use(cookieSession({
    name:"session",
    keys:["sam5423"],
    maxAge: 24 * 60 * 60 * 100
}))


app.listen(5000,()=>{
    console.log('server is running')
})