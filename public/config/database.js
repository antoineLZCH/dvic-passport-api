"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const { DB_HOST, DB_PASSWORD, DB_NAME, DB_USER } = process.env;
const SERVER_ADDRESS = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
// @ts-ignore
mongoose_1.default.connect(SERVER_ADDRESS, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connected successfully');
});
exports.default = mongoose_1.default;
//# sourceMappingURL=database.js.map