import express from "express";
// import { login } from "../app/controllers/todoController.js";
import * as TodoController from "../app/controllers/todoController.js"
const router = express.Router();

router.get("/hello", (req, res)=>{
  res.send("Hello World")  
});

router.get("/token",()=>{
  res.send("I am post body")
});

router.post("/post",(req,res)=>{
  res.send("I am post body")
});


export default router;
