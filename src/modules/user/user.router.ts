import express from "express";
import { userController } from "./user.controller";


const useRoute= express.Router();

useRoute.post("/user",userController.createUser);



export default useRoute;