import { Application } from "express";
import useRoute from "./modules/user/user.router";




const appRoutes=(app:Application)=>{
    // user
    app.use("/api/v1/",useRoute);


    // NOT FOUND
    app.all("*",(req,res,next)=>{
        res.status(404).json({message:`The url ${req.originalUrl} is not found`})
    })
}

export default appRoutes;