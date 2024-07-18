"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("../errors/custom-error");
const errorHandler = (error, req, res, next) => {
    if (error instanceof custom_error_1.APIError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: 'something went wrong!' });
};
exports.default = errorHandler;
