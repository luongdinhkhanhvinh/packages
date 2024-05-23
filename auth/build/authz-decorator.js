"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAuthorization = void 0;
const common_1 = require("@nestjs/common");
const CheckAuthorization = (checkAuthz) => (0, common_1.SetMetadata)('checkAuthorization', checkAuthz);
exports.CheckAuthorization = CheckAuthorization;
