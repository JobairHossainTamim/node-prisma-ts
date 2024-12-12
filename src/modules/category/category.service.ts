import { prisma } from "~/prisma"
import { ICategory } from "./category.interface"
import { Category } from "@prisma/client";




const add=async(reqBody:ICategory):Promise<Category>=>{

    const {name,icon}=reqBody;

    const category:Category = await prisma.category.create({
        data:{
            name,icon
        }
    })

    return category;
}








export const categoryService ={
 add, 
}