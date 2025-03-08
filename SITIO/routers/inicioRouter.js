import express from "express";
import  inicio  from "../controller/inicioController.js";

const router = express.Router();
router.get("/",inicio);

export default router; 