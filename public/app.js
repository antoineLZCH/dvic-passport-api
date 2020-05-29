"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compress = require("compression");
const bodyParser = require("body-parser");
const api_1 = __importDefault(require("./api"));
class App {
    constructor(port) {
        this.app = express();
        this.AppRouter = api_1.default;
        this.port = port;
        this.addDependencies();
        this.configureRoutes();
    }
    addDependencies() {
        this.app.use(morgan('combined'));
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(compress());
    }
    configureRoutes() {
        this.app.use('/api', this.AppRouter);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application listening on port ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map