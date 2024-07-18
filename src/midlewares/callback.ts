import { Request, Response, NextFunction } from "express";

export const asyncWrapper = (callback: any) =>{
    return async (req: Request, res:Response, next: NextFunction) =>{
        try {
            await callback(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

