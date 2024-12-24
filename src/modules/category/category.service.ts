import { prisma } from "~/prisma"
import { ICategory } from "./category.interface"
import { Category } from "@prisma/client";
import { NotFound } from "~/middleware/custom.error";




const add=async(reqBody:ICategory):Promise<Category>=>{

    const {name,icon}=reqBody;

    const category:Category = await prisma.category.create({
        data:{
            name,icon
        }
    })

    return category;
}


const read =async()=>{

    const categories:Category[]=await prisma.category.findMany({
        where:{
            status:true
        }
    });

    return categories;
}



const readOne =async(id:number)=>{

    
    const categories:Category[]=await prisma.category.findMany({
        where:{
            id
        }
    });

    if(!categories){
        throw new NotFound(`Category with ID : ${id} not found`)
    }


    return categories;
}

const edit=async(id:number,reqBody:any)=>{

    const {name,icon}=reqBody;

const update= await
    prisma.category.update({
        where:{
            id,
        },
        data:{
            name,icon
        }
    })


    if(!update){
        throw new NotFound(`Category with ID : ${id} not found Update Problem`)
    }

 return update

}

const getCountCategory=async(id:number):Promise<number>=>{
 
    const count= await prisma.category.count({
        where:{
            id
        }
    })

    return count
}


const remove=async(id:number)=>{

    const del= await prisma.category.delete({
        where:{
            id
        }
    })

    return del
}


export const categoryService ={
 add, read,readOne,edit,remove
}