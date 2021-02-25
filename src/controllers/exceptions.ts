// abstract class BusinessRuleError {

// }

enum ErrorType {
    BusinessConstraintViolation = 1,
    NotFoundEntity = 2,
    InvalidDataType = 3,
    IntegrationAPIUnavailable = 4,

}

class UserAlreadyExistsError {
    readonly errorType: ErrorType;
    readonly errorCode: string;
    readonly message: string;

    constructor() {
        this.errorType = ErrorType.BusinessConstraintViolation;
        this.errorCode = "user:already_exists";
        this.message = "User already exists."
    }
}

export { UserAlreadyExistsError }