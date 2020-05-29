"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req) => {
    if (req.headers.authorization) {
        const [prefix, token] = req.headers.authorization.split(' ');
        return prefix == "Bearer" ? token : null;
    }
    return null;
};
//# sourceMappingURL=getTokenFromRequest.js.map