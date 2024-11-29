import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

const validateRequest = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {


        const { error } = schema.validate(req.body, { abortEarly: false }); // Do not stop at the first error

        if (error) {
            // Map all error details to a list of messages
            const messages = error.details.map((detail) => detail.message.replace(/['""]/g,''));

            res.status(400).json({ errors: messages });
            return;
        }
        next();
    };
};

export default validateRequest;
