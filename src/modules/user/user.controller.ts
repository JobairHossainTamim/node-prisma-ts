import { User } from "@prisma/client";
import { Request, Response } from "express"
import { prisma } from "~/prisma";
import { userValidate } from "./user.validation";
import { HTTP_Status } from "~/constant/http";




const createUser =async(req:Request,res:Response)=>{


    const {email,password ,firstName,lastName,avatar}=req.body;


    // insert into db 
    const newUser:User = await prisma.user.create({
        data:{
            email,password,firstName,lastName,avatar
        }

    })
    res.status(HTTP_Status.CREATED).json(newUser)
}


export const userController ={
createUser

}