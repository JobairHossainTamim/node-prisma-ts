import express from "express";
import { asyncWrapper } from "~/middleware/asyncWrapper";
import { categoryController } from "./category.controller";
import validateRequest from "~/middleware/validate.middleware";
import { categoryValidate } from "./category.validation";




const useRoute= express.Router();


useRoute.post("/",validateRequest(categoryValidate),asyncWrapper(categoryController.createCategory));
useRoute.get("/",asyncWrapper(categoryController.getAll));
useRoute.get("/:id",asyncWrapper(categoryController.get));
useRoute.put("/:id",asyncWrapper(categoryController.update));
useRoute.delete("/:id",asyncWrapper(categoryController.remove));


export default useRoute;


