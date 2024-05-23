"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseInstance = void 0;
const tslib_1 = require("tslib");
/* eslint-disable no-use-before-define */
const app_1 = require("firebase-admin/app");
const firebase_admin_1 = tslib_1.__importDefault(require("firebase-admin"));
class FirebaseInstance {
    constructor() {
        return (0, app_1.initializeApp)({
            credential: firebase_admin_1.default.credential.cert({
                privateKey: process.env.FIREBASE_PRIVATE_KEY,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                projectId: process.env.FIREBASE_PROJECT_ID,
            }),
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        });
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
}
exports.FirebaseInstance = FirebaseInstance;
