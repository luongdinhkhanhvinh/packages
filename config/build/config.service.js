"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_default_1 = require("./config.default");
const admin = require("firebase-admin");
let ConfigService = class ConfigService {
    constructor(data = config_default_1.DEFAULT_CONFIG) {
        this.config = data;
    }
    loadFromEnv() { }
    parseConfigFromEnv(env) {
        return {
            env: env.NODE_ENV || config_default_1.DEFAULT_CONFIG.env,
            port: parseInt(env.PORT, 10),
            db: this.parseDBConfig(env, config_default_1.DEFAULT_CONFIG.db),
            swagger: this.parseSwaggerConfig(env, config_default_1.DEFAULT_CONFIG.swagger),
            logLevel: env.LOG_LEVEL,
            auth: {
                expiresIn: Number(env.TOKEN_EXPIRY),
                access_token_secret: env.JWT_ACCESS_TOKEN_SECRET,
                refresh_token_secret: env.JWT_REFRESH_TOKEN_SECRET,
            },
            firebase: {
                credential: admin.credential.cert({
                    privateKey: process.env.FIREBASE_PRIVATE_KEY,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    projectId: process.env.FIREBASE_PROJECT_ID,
                }),
            },
        };
    }
    parseDBConfig(env, defaultConfig) {
        return {
            url: env.DATABASE_URL || defaultConfig.url,
        };
    }
    parseSwaggerConfig(env, defaultConfig) {
        return {
            username: env.SWAGGER_USERNAME || defaultConfig.username,
            password: env.SWAGGER_PASSWORD || defaultConfig.password,
        };
    }
    get() {
        return this.config;
    }
};
exports.ConfigService = ConfigService;
exports.ConfigService = ConfigService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ConfigService);
