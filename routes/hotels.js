import express from "express";
import { createHotel, deleteHotel, getHotel, GetHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
const router = express.Router();
import {createError} from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE
router.post("/",verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id",verifyAdmin, deleteHotel)

//GET
router.get("/:id", getHotel)
   
//GETALL
router.get("/", GetHotels)

export default router;