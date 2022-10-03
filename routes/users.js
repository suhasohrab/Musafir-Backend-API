import express from "express";
const router = express.Router();
import {
 updatedUser, DeleteUser, GetUser, GetUsers
} from "../controllers/user.js";
import { verifyToken, verifyUser,verifyAdmin } from "../utils/verifyToken.js";

//router.get("/checkauthentication", verifyToken, (req,res,next)=>{
  //  res.send("hello user, you are logged in")})

//router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  //     res.send("hello user, you are logged in and you can delete your account")
    // })

 //router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  // res.send("hello admin, you are logged in and you can delete all accounts")
 //})
 
//UPDATE
router.put("/:id",verifyUser, updatedUser)

//DELETE
router.delete("/:id",verifyUser, DeleteUser)

//GET
router.get("/:id",verifyUser, GetUser)
   
//GETALL
router.get("/", verifyAdmin, GetUsers)

export default router;