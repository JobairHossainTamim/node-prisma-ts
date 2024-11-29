import express from "express";
import { userController } from "./user.controller";
import validateRequest from "~/middleware/validate.middleware";
import { userValidate } from "./user.validation";


const useRoute= express.Router();

useRoute.post("/user",validateRequest(userValidate),userController.createUser);


export default useRoute;