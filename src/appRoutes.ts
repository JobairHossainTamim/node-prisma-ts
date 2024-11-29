import { Application } from "express";
import useRoute from "./modules/user/user.router";




const appRoutes=(app:Application)=>{
    // user
    app.use("/api/v1/",useRoute);
}

export default appRoutes;