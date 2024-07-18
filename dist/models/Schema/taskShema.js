"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskShema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    }
});
exports.default = (0, mongoose_1.model)('Task', taskShema);
