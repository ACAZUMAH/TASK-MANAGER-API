import { NextFunction, Request, Response } from 'express';
import { Task } from '../models/Schema/task-schema';
import { asyncWrapper } from '../midlewares/callback';
import { callAPIError } from '../errors/custom-error';

export const createTask = asyncWrapper(async (req:Request, res: Response) => {
    const task = new Task(req.body)
    await task.save()
    .then((data) =>{
        res.status(201).json(data)
    })
})
export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})
export const getTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id });
    if (!task) {
        return next(callAPIError(`No Task with id: ${id}`, 404))
    }
    res.status(200).json({ task });
})
export const updateTask = asyncWrapper(async (req:Request, res: Response, next: NextFunction) =>{
    const id = req.params.id
    const task = await Task.findOneAndUpdate({_id: id}, req.body, {
        new: true,
        runValidators: true
    })
    if(!task){
        return next(callAPIError(`No Task with id: ${id}`, 404))
    }
    res.status(200).json({ task})
})
export const deleteTask =asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const task = await Task.findOneAndDelete({ _id: id })
    if(!task){
        return next(callAPIError(`No Task with id: ${id}`, 404))
    }
    res.status(200).send('Task deleted')
  
})

