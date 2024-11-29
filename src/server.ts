import { Application } from "express";
import dotenv from 'dotenv';

dotenv.config(); 

export function startServer(app:Application){
    
const port=parseInt(process.env.PORT!)||5000;

app.listen(port,()=>{
    console.log(`Application is listening ${port}`)
})
}