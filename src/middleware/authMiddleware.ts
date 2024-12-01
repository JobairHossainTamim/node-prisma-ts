import { NextFunction, Request, Response } from "express";
import { ForbiddenRequest, UnAuthorizedException } from "./custom.error";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyUser=(req:Request,res:Response,next:NextFunction)=>{
    const authorization = req.headers.authorization
    ? req.headers.authorization.split(" ")
    : [];

  const token = authorization.length > 1 ? authorization[1] : null;

 
  if(token){

    try {
        // const decoded=jwt.verify(token,process.env.JWT_SECRET!);
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
   
   
        req.currentUser=decoded;

  next();
    
     
   
      } catch (error) {
       throw new UnAuthorizedException("Authorized Failed, Please login again")
      }
  } 
  else{
    res.status(401);
    throw new UnAuthorizedException("Unauthorized token");
  }
 
}

export const checkUserAuthenticate=(req:Request,res:Response,next:NextFunction)=>{
    if(!req.currentUser){
        throw new ForbiddenRequest(`You are not login `)
    }

    next();
}