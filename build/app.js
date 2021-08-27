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
require("./utils/alias");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const util_1 = __importDefault(require("util"));
const config_1 = __importDefault(require("config"));
const RequestError_1 = __importDefault(require("@models/RequestError"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(util_1.default.inspect(config_1.default, { depth: null }));
        const isProduction = process.env.NODE_ENV === 'production';
        const app = (0, express_1.default)();
        if (config_1.default.get('api.allowCors')) {
            const cors = require('cors');
            app.use(cors());
        }
        app.use((0, morgan_1.default)('common'));
        app.use(body_parser_1.default.urlencoded({ extended: false }));
        app.use(body_parser_1.default.json());
        require('./models');
        app.use(require('./routes'));
        // catch 404 and forward to error handler
        app.use(function (req, res, next) {
            const err = new RequestError_1.default(404, 'Not Found');
            next(err);
        });
        /// error handlers
        if (!isProduction) {
            app.use(function (err, req, res, next) {
                console.log(err.stack);
                res.status(err.status || 500);
                res.json({
                    errors: {
                        message: err.message,
                        error: err
                    }
                });
            });
        }
        else {
            app.use(function (err, req, res, next) {
                res.status(err.status || 500);
                res.json({
                    errors: {
                        message: err.message,
                        error: {}
                    }
                });
            });
        }
        // finally, let's start our server...
        var server = app.listen(config_1.default.get('api.port') || 8080, function () {
            const address = server === null || server === void 0 ? void 0 : server.address();
            console.log('Listening on port ' + address.port);
        });
    });
}
init();
