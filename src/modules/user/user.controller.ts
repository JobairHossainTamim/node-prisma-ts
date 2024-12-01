import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express"
import { prisma } from "~/prisma";
import { HTTP_Status } from "~/constant/http";
import { BadRequestException, InternalServer } from "~/middleware/custom.error";
import { userService } from "./user.service";




const createUser =async(req:Request,res:Response,next:NextFunction)=>{
  
    // Check if the email already exists
    const emailExists = await userService.isEmailAlreadyExist(req.body.email);

    if (emailExists) {
      next(new BadRequestException(`Email already exists, it must be unique`));
      return;
    }
    
    const data= await userService.addUser(req.body);

    res.status(HTTP_Status.CREATED).json(
        {
          message:"User Register Successfully",
          data: data,
        }
    );
}

const loginUser= async(req:Request,res:Response,next:NextFunction)=>{

 const accessToken= await userService.login(req.body);
  res.status(HTTP_Status.CREATED).json({
    message:"User Login Success",
    accessToken
  })
}



// Get Single User
const getUser= async(req:Request,res:Response,next:NextFunction)=>{

}
export const userController ={
createUser,
loginUser,getUser

}