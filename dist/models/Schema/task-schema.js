"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskShema = new mongoose_1.Schema({
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
});
exports.Task = (0, mongoose_1.model)('Task', taskShema);
