"use strict";
// abstract class BusinessRuleError {
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistsError = void 0;
// }
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["BusinessConstraintViolation"] = 1] = "BusinessConstraintViolation";
    ErrorType[ErrorType["NotFoundEntity"] = 2] = "NotFoundEntity";
    ErrorType[ErrorType["InvalidDataType"] = 3] = "InvalidDataType";
    ErrorType[ErrorType["IntegrationAPIUnavailable"] = 4] = "IntegrationAPIUnavailable";
})(ErrorType || (ErrorType = {}));
class UserAlreadyExistsError {
    constructor() {
        this.errorType = ErrorType.BusinessConstraintViolation;
        this.errorCode = "user:already_exists";
        this.message = "User already exists.";
    }
}
exports.UserAlreadyExistsError = UserAlreadyExistsError;
//# sourceMappingURL=exceptions.js.map