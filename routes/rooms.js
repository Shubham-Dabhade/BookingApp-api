import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();


//CREATE
router.post("/:hotelId",verifyAdmin,createRoom);


//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:roomId",verifyAdmin, updateRoom);

//DELETE
router.delete("/:roomId/:hotelId",verifyAdmin,deleteRoom);

//GET
router.get("/:roomId", getRoom);

//GET ALL
router.get("/",getAllRoom);



export default router;