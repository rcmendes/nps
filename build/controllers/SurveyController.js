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
exports.SurveyController = void 0;
const typeorm_1 = require("typeorm");
const SurveyRepository_1 = require("../repositories/SurveyRepository");
// import { SurveyAlreadyExistsError } from "./exceptions";
class SurveyController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description } = request.body;
            const SurveysRepository = typeorm_1.getCustomRepository(SurveyRepository_1.SurveyRepository);
            // const isSurveyExists = SurveysRepository.findOne({ email });
            // if (isSurveyExists) {
            // return response.status(400).send(new SurveyAlreadyExistsError());
            // }
            const Survey = SurveysRepository.create({
                title, description
            });
            yield SurveysRepository.save(Survey);
            return response.status(201).send(Survey);
        });
    }
}
exports.SurveyController = SurveyController;
//# sourceMappingURL=SurveyController.js.map