import { User } from "@prisma/client";
import { Request, Response } from "express"
import { prisma } from "~/prisma";



const createUser =async(req:Request,res:Response)=>{


    const {email,password ,firstName,lastName,avatar}=req.body;
    // insert into db 
    const newUser:User = await prisma.user.create({
        data:{
            email,password,firstName,lastName,avatar
        }
    })
    res.status(200).json(newUser)
}


export const userController ={
createUser

}