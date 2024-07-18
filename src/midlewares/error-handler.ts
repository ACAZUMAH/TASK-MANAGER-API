import { Request, Response, NextFunction } from "express";
import { APIError } from "../errors/custom-error";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) =>{
    if(error instanceof APIError){
        return res.status(error.statusCode).json({ message: error.message })
    }
    return res.status(500).json({ message: 'something went wrong!' })
}

export default errorHandler;