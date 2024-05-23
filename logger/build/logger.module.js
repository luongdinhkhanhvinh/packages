"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLoggerModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const logger_1 = require("./logger");
const logger_middleware_1 = require("./logger.middleware");
const vi_configs_1 = require("vi-configs");
let AppLoggerModule = class AppLoggerModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppLoggerModule = AppLoggerModule;
exports.AppLoggerModule = AppLoggerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [vi_configs_1.ConfigModule],
        controllers: [],
        providers: [logger_1.Logger],
        exports: [logger_1.Logger],
    })
], AppLoggerModule);
