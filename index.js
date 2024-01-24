const express=require("express")
const rateLimiter=require("express-rate-limit")

const app=express()

const limiter = rateLimiter({
	windowMs:  60 * 1000, // 1 minutes
	limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    message:"Hey please come after some time"
})

app.get("/",limiter,(req,res)=>{
    res.send("Hello from the server")
})

app.listen(8000,()=>{
    console.log("server is running at 8000")
})