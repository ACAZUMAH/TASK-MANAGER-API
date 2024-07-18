import { Schema, model } from 'mongoose';

const taskShema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [20, 'Name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

export const Task = model('Task', taskShema);