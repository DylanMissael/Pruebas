import e from "express";
import contactoController from "../controller/contactoController.js";

const con = e.Router();
con.get("/",contactoController);
export default con;