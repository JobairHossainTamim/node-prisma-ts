import { NextFunction, Request, Response } from "express"
import { HTTP_Status } from "~/constant/http"
import { categoryService } from "./category.service"





const createCategory= async(req:Request,res:Response)=>{

    const category= await categoryService.add(req.body);


    return res.status(HTTP_Status.OK).json({
      data:category,
      message:"Create Category Success "

    });
  
  }







export const categoryController ={
    createCategory,
}