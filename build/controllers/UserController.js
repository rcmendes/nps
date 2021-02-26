"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const typeorm_1 = require("typeorm");
const UserRepository_1 = require("../repositories/UserRepository");
const exceptions_1 = require("./exceptions");
class UserController {
    registry(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email } = request.body;
            const usersRepository = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
            const isUserExists = usersRepository.findOne({ email });
            if (isUserExists) {
                return response.status(400).send(new exceptions_1.UserAlreadyExistsError());
            }
            const user = usersRepository.create({
                name, email
            });
            yield usersRepository.save(user);
            return response.status(201).send(user);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map