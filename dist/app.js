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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_route_1 = __importDefault(require("./routes/main-route"));
const connect_1 = require("./models/connect");
const not_found_1 = __importDefault(require("./midlewares/not-found"));
const error_handler_1 = __importDefault(require("./midlewares/error-handler"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.static('./public'));
app.use(express_1.default.json());
app.use(main_route_1.default);
app.use(not_found_1.default);
app.use(error_handler_1.default);
const PORT = process.env.PORT || 3500;
const url = process.env.DATABASE_URL;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (url) {
            yield (0, connect_1.connect)(url);
            app.listen(PORT, () => {
                console.log(`sever running on http://localhost:${PORT}`);
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
start();
