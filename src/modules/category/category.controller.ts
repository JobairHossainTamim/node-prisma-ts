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


  const getAll= async(req:Request,res:Response)=>{

    const categories= await categoryService.read();

    return res.status(HTTP_Status.OK).json({message:"Get All Categories",
      data:categories
    })
  }

  const get =async(req:Request,res:Response)=>{

    const categories= await categoryService.readOne(parseInt(req.params.id));

    return res.status(HTTP_Status.OK).json({
message:"Get Category",
data:categories
    })
  }



  const update=async(req:Request,res:Response)=>{

    const categories=await categoryService.edit(parseInt(req.params.id),req.body);

    return res.status(HTTP_Status.OK).json({
      message:"Get Category Update",
      data:categories
          })
  }

  const remove=async(req:Request,res:Response)=>{

    const categories=await categoryService.remove(parseInt(req.params.id));

    return res.status(HTTP_Status.OK).json({
      message:"Category Remove success ",
      data:categories
          })
  }







export const categoryController ={
    createCategory,getAll,get,update,remove
}