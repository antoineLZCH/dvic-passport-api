"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const getTokenFromRequest_1 = __importDefault(require("../helpers/getTokenFromRequest"));
const checkToken = (token) => {
    const { PUBLIC_KEY } = process.env;
    return jwt.verify(token, PUBLIC_KEY, {
        algorithms: ['RS256']
    });
};
exports.default = (req, res, next) => {
    const token = getTokenFromRequest_1.default(req);
    if (token && checkToken(token)) {
        req.app.set('user', checkToken(token));
        return next();
    }
    return res.sendStatus(403);
};
//# sourceMappingURL=isValidToken.js.map