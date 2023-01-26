import express from "express";
const router = express.Router();
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyToken,verifyAdmin, verifyUser } from "../utils/verifyToken.js";




//UPDATE
router.put("/:userId",verifyUser,updateUser);

//DELETE
router.delete("/:userId",verifyUser,deleteUser);

//GET
router.get("/:userId",verifyUser,getUser);

//GET ALL
router.get("/",verifyAdmin ,getAllUser);

export default router;