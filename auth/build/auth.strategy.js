"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAuthStrategy = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_firebase_jwt_1 = require("passport-firebase-jwt");
const firebase_service_1 = require("./firebase.service");
const firebase_admin_1 = require("firebase-admin");
let FirebaseAuthStrategy = class FirebaseAuthStrategy extends (0, passport_1.PassportStrategy)(passport_firebase_jwt_1.Strategy, 'firebase-auth') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_firebase_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
        this.configService = configService;
        console.log(this.configService);
    }
    validate(token) {
        firebase_service_1.FirebaseInstance.Instance;
        const user = (0, firebase_admin_1.auth)()
            .verifyIdToken(token, true)
            .catch((err) => {
            console.log(err);
            throw new common_1.UnauthorizedException();
        });
        // req.user
        console.log(user);
        return user;
    }
};
exports.FirebaseAuthStrategy = FirebaseAuthStrategy;
exports.FirebaseAuthStrategy = FirebaseAuthStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FirebaseAuthStrategy);
