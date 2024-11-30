import { User } from "@prisma/client";
import { prisma } from "~/prisma";
import {  IUser } from "./user.interface";




const addUser=async(reqBody:IUser)=>{

    const {email,password,firstName,lastName,avatar}=reqBody;

    //   const hashedPassword = await hashPassword(password);

     // insert into db 
    const newUser:User = await prisma.user.create({
        data:{
            email,password,firstName,lastName,avatar
        }
    });

    return newUser;
}



// Signin

const Signin=async(reqBody:IUser)=>{


}

// Check if an email already exists

const isEmailAlreadyExist = async (email: string): Promise<boolean> => {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user !== null;
  };
  
  export const userService = {
    addUser,
    isEmailAlreadyExist,
    Signin
  }