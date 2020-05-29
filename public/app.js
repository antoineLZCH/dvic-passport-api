"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./api"));
class App {
    constructor(port) {
        this.app = express_1.default();
        this.AppRouter = api_1.default;
        this.port = port;
        this.addDependencies();
        this.configureRoutes();
    }
    addDependencies() {
        this.app.use(morgan_1.default('combined'));
        this.app.use(helmet_1.default());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(compression_1.default());
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