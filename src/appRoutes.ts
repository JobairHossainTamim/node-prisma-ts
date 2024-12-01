import { Application, NextFunction, Request, Response } from "express";
import useRoute from "./modules/user/user.router";
import { customError, NotFound } from "./middleware/custom.error";




const appRoutes=(app:Application)=>{
    // user
    app.use("/api/v1/user",useRoute);



    // Global Error 
    app.use((error: any, req: Request, res: Response, next: NextFunction):void | any => {
          
        return res.status(error.statusCode).json({
            status: error.status,
            statusCode: error.statusCode,
            message: error.message,
        });  
}
);
  
    app.use((error: any, req: Request, res: Response, next: NextFunction):void | any => {
          
                return res.status(error.statusCode).json({
                    status: error.status,
                    statusCode: error.statusCode,
                    message: error.message,
                });
        }
    );

    // NOT FOUND
    app.use("*", (req: Request, res: Response, next: NextFunction) => {
        next(new NotFound(`The URL ${req.originalUrl} is not found`));
    });

}

export default appRoutes;