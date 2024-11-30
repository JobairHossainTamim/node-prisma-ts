import { HTTP_Status } from "~/constant/http";

export abstract class customError extends Error  {
   abstract status:string;
    abstract statusCode:number;
 
    constructor(message:string) {
        super(message);
    }
}

export class BadRequestException extends customError{
    status: string="error";
    statusCode: number=HTTP_Status.BAD_REQUEST;

    constructor(message:string){
        super(message)
    }
}


export class UnAuthorizedException extends customError{
    status: string="error";
    statusCode: number=HTTP_Status.UNAUTHORIZED;

    constructor(message:string){
        super(message)
    }
}

export class NotFound extends customError{
    status: string="error";
    statusCode: number=HTTP_Status.NOT_FOUND;

    constructor(message:string){
        super(message)
    }
}


export class InternalServer extends customError{
    status: string="error";
    statusCode: number=HTTP_Status.INTERNAL_SERVER_ERROR;

    constructor(message:string){
        super(message)
    }
}
export class ForbiddenRequest extends customError{
    status: string="error";
    statusCode: number=HTTP_Status.FORBIDDEN_REQUEST;

    constructor(message:string){
        super(message)
    }
}



