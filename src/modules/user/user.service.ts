
import { prisma } from "~/prisma";
import { IUser } from "./user.interface";
import hashPassword from "~/utils/hashPassword";
import { BadRequestException } from "~/middleware/custom.error";
import comparePassword from "~/utils/comparePassword";
import generateToken from "~/utils/generateToken";
import { User } from "@prisma/client";





const addUser=async(reqBody:IUser)=>{
    const {email,password,firstName,lastName,avatar}=reqBody;

      const hashedPassword = await hashPassword(password);

     // insert into db 
    const newUser:User = await prisma.user.create({
        data:{
            email,password:hashedPassword,firstName,lastName,avatar
        }
    });

    return newUser;
}



// Signin

const login=async(reqBody:IUser)=>{

  // get email
  const user:User | null=await getUserByEmail(reqBody.email);
  if(!user){
    throw new BadRequestException("Invalid Credential");
  }
  // compare password
  const isMatchPassword:boolean= await comparePassword(reqBody.password,user.password);

  if(!isMatchPassword){
    throw new BadRequestException("Invalid Password Credential");
  }
// generate token 
const payload: IUser = {
  id: user.id.toString(), 
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
  avatar: user.avatar,
  role: user.role,
  password: user.password, 
};
  const accessToken:string= await generateToken(payload)

  return accessToken;
}

const getUserByEmail=async(email:string)=>{
  return await prisma.user.findFirst({
    where:{
      email
    }
  })
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
    login
  }