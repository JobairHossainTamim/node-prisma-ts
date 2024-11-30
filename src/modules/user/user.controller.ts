import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express"
import { prisma } from "~/prisma";
import { HTTP_Status } from "~/constant/http";
import { BadRequestException, InternalServer } from "~/middleware/custom.error";




const createUser =async(req:Request,res:Response,next:NextFunction)=>{

try {
    

    const {email,password ,firstName,lastName,avatar}=req.body;

  
    // insert into db 
    const newUser:User = await prisma.user.create({
        data:{
            email,password,firstName,lastName,avatar
        }

    });
    res.status(HTTP_Status.CREATED).json(newUser);

} catch (error:any) {
next(new InternalServer(error.message));
    
}
}


export const userController ={
createUser

}