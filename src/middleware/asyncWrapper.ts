import { NextFunction, Request, Response } from "express";
import { InternalServer } from "./custom.error";


export function asyncWrapper(callback:any){

    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
           await callback(req,res,next);
        } catch (error:any) {
            
            next(new InternalServer(error.message))
        }
    }
}