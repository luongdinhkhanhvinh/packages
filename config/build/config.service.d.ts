/// <reference types="node" />
import { ConfigData } from './config.interface';
export declare class ConfigService {
    private config;
    constructor(data?: ConfigData);
    loadFromEnv(): void;
    parseConfigFromEnv(env: NodeJS.ProcessEnv): ConfigData;
    private parseDBConfig;
    private parseSwaggerConfig;
    get(): Readonly<ConfigData>;
}
