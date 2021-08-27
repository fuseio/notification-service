"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = __importDefault(require("express-jwt"));
const config_1 = __importDefault(require("config"));
const secret = config_1.default.get('api.secret');
const auth = {
    required: (0, express_jwt_1.default)({
        secret: secret,
        credentialsRequired: true,
        algorithms: []
    }),
    optional: (0, express_jwt_1.default)({
        secret: secret,
        credentialsRequired: false,
        algorithms: []
    })
};
module.exports = auth;
