import express from "express";
// import { login } from "../app/controllers/todoController.js";
import * as TodoController from "../app/controllers/todoController.js"
import { jwtTokenGen } from "../app/utility/JsonWebToken.js";
const router = express.Router();

router.get("/hello", (req, res)=>{
  res.send("Hello World")  
});

router.get("/token",(req,res,next)=>{

  const user ={
    name:"Farhana",
    email:"farhana@gmail.com",
    gender:"female"
  }
  const token = jwtTokenGen(user)
  res.status(200).json({token})
});

router.post("/post",(req,res)=>{
  res.send("I am post body")
});


export default router;
