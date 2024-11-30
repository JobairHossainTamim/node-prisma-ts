import express from "express";
import { userController } from "./user.controller";
import validateRequest from "~/middleware/validate.middleware";
import { userValidate } from "./user.validation";
import { asyncWrapper } from "~/middleware/asyncWrapper";


const useRoute= express.Router();

useRoute.post("/register",validateRequest(userValidate),asyncWrapper(userController.createUser));


export default useRoute;