import { Router, Request, Response } from 'express';
import { createTask,getTask,getAllTasks,updateTask,deleteTask, } from '../controllers/task-control';

const router = Router();

router.get('/api/v1/tasks', getAllTasks);
router.get('/api/v1/tasks/:id', getTask);
router.post('/api/v1/tasks', createTask);
router.patch('/api/v1/tasks/:id', updateTask);
router.delete('/api/v1/tasks/:id', deleteTask);

export default router;