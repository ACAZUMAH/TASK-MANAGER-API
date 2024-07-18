"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.getAllTasks = exports.createTask = void 0;
const task_schema_1 = require("../models/Schema/task-schema");
const callback_1 = require("../midlewares/callback");
const custom_error_1 = require("../errors/custom-error");
exports.createTask = (0, callback_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = new task_schema_1.Task(req.body);
    yield task.save()
        .then((data) => {
        res.status(201).json(data);
    });
}));
exports.getAllTasks = (0, callback_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_schema_1.Task.find({});
    res.status(200).json({ tasks });
}));
exports.getTask = (0, callback_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const task = yield task_schema_1.Task.findOne({ _id: id });
    if (!task) {
        return next((0, custom_error_1.callAPIError)(`No Task with id: ${id}`, 404));
    }
    res.status(200).json({ task });
}));
exports.updateTask = (0, callback_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const task = yield task_schema_1.Task.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return next((0, custom_error_1.callAPIError)(`No Task with id: ${id}`, 404));
    }
    res.status(200).json({ task });
}));
exports.deleteTask = (0, callback_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const task = yield task_schema_1.Task.findOneAndDelete({ _id: id });
    if (!task) {
        return next((0, custom_error_1.callAPIError)(`No Task with id: ${id}`, 404));
    }
    res.status(200).send('Task deleted');
}));
