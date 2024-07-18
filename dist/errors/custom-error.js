"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callAPIError = exports.APIError = void 0;
class APIError extends Error {
    constructor(msg, statusCode) {
        super(msg);
        this.statusCode = statusCode;
        this.statusCode = statusCode;
    }
}
exports.APIError = APIError;
const callAPIError = (msg, statusCode) => {
    return new APIError(msg, statusCode);
};
exports.callAPIError = callAPIError;
