export class APIError extends Error{
    constructor(msg: string, public statusCode: number){
        super(msg)
        this.statusCode = statusCode
    }
}

export const callAPIError = (msg: string, statusCode: number) =>{
    return new APIError(msg, statusCode)
}