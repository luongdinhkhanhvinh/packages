"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const vi_configs_1 = require("vi-configs");
const auth_strategy_1 = require("./auth.strategy");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [vi_configs_1.ConfigModule, passport_1.PassportModule.register({ defaultStrategy: 'firebase-auth' })],
        providers: [auth_strategy_1.FirebaseAuthStrategy],
        exports: [passport_1.PassportModule, auth_strategy_1.FirebaseAuthStrategy],
    })
], AuthModule);
