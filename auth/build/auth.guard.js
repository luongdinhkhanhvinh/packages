"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAuthGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let FirebaseAuthGuard = class FirebaseAuthGuard extends (0, passport_1.AuthGuard)('firebase-auth') {
};
exports.FirebaseAuthGuard = FirebaseAuthGuard;
exports.FirebaseAuthGuard = FirebaseAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FirebaseAuthGuard);
