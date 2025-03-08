import e from "express";
import cursoController from "../controller/cursoController.js";

const curso = e.Router();
curso.get("/",cursoController);
export default curso;