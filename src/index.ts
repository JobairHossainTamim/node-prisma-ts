import express,{ Application } from "express";
import { startServer } from "./server";
import cors from "cors";
import bodyParser from "body-parser";
import appRoutes from "./appRoutes";



const app:Application=express();

startServer(app);


// cors
app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ inflate: true, limit: "100kb", type: "text/xml" }));
app.use(bodyParser.raw({ type: "application/json" }));
// end cors




// Route
appRoutes(app);
// router section




module.exports=app;





