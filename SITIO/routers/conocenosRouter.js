import e from "express";
import conocerController from "../controller/conocenosController.js";

const conocenos = e.Router();
conocenos.get("/",conocerController);
export default conocenos;