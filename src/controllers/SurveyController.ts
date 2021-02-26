import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repositories/SurveyRepository";
// import { SurveyAlreadyExistsError } from "./exceptions";

class SurveyController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;

        const surveyRepository = getCustomRepository(SurveyRepository);

        const Survey = surveyRepository.create({
            title, description
        })

        await surveyRepository.save(Survey);

        return response.status(201).send(Survey);
    }

    async listAll(request:Request, response: Response) {
        const surveyRepository = getCustomRepository(SurveyRepository);

        const list = await surveyRepository.find();

        return response.send(list);
    }
}

export { SurveyController };
