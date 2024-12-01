import express from "express";
import { userController } from "./user.controller";
import validateRequest from "~/middleware/validate.middleware";
import { userLoginValidate, userValidate } from "./user.validation";
import { asyncWrapper } from "~/middleware/asyncWrapper";


const useRoute= express.Router();

useRoute.post("/register",validateRequest(userValidate),asyncWrapper(userController.createUser));
useRoute.post("/login",validateRequest(userLoginValidate),asyncWrapper(userController.loginUser));
useRoute.get("/",validateRequest(userLoginValidate),asyncWrapper(userController.getUser));
export default useRoute;