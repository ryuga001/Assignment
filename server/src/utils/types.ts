import { NextFunction, Request, Response } from "express"

export type ControllerType = (
    req: Request,
    res: Response,
    next: NextFunction,
) => Promise<void | Response<any, Record<string, any>>>;


export interface AnimalRequestBody {
    name: string,
    description: string,
    species: string,
    age: number,
}
