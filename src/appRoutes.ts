import { Application, NextFunction, Request, Response } from "express";
import useRoute from "./modules/user/user.router";
import { customError } from "./middleware/custom.error";




const appRoutes=(app:Application)=>{
    // user
    app.use("/api/v1/",useRoute);



    // Global Error 

    app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
        if (error instanceof customError){
            res.status(error.statusCode).json({error})
        }
    });

    // NOT FOUND
    app.all("*",(req,res,next)=>{
        res.status(404).json({message:`The url ${req.originalUrl} is not found`})
    })
}

export default appRoutes;