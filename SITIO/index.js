import express from "express";

import router from "./routers/inicioRouter.js";
import curso from "./routers/cursoRouter.js";
import con from "./routers/contactoRouter.js";
import conocenos from "./routers/conocenosRouter.js";

const app = express();

// configuraciones generales
    app.set("view engine","pug");
    app.set("views","./views");
    app.use(express.static("public"));
    
// configuraciones de la ruta
    app.use("/",router);
    app.use("/curso",curso);
    app.use("/contacto",con);
    app.use("/conocenos",conocenos);

// ejecutamos el servidor
    const puerto = 2800;
    app.listen(puerto,()=>{console.log(`Servidor ejecutandose en el puerto ${puerto}`)});