import express from "express";
import { asyncWrapper } from "~/middleware/asyncWrapper";
import { categoryController } from "./category.controller";
import validateRequest from "~/middleware/validate.middleware";
import { categoryValidate } from "./category.validation";




const useRoute= express.Router();


useRoute.post("/",validateRequest(categoryValidate),asyncWrapper(categoryController.createCategory));



export default useRoute;


