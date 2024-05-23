import { ConfigService } from 'vi-configs';
import { Strategy } from 'passport-firebase-jwt';
declare const FirebaseAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class FirebaseAuthStrategy extends FirebaseAuthStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(token: string): Promise<import("firebase-admin/lib/auth/token-verifier").DecodedIdToken>;
}
export {};
