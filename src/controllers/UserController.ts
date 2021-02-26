import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { UserAlreadyExistsError } from "./exceptions";

class UserController {
    async registry(request: Request, response: Response) {
        const { name, email } = request.body;

        const userRepository = getCustomRepository(UserRepository);
        
        const isUserExists = await userRepository.findOne({ email });
        
        if (isUserExists) {
            return response.status(400).send(new UserAlreadyExistsError());
        }

        const user = userRepository.create({
            name, email
        })

        await userRepository.save(user);

        return response.status(201).send(user);
    }

    async listAll(request:Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository);

        const list = await userRepository.find();

        return response.send(list);
    }
}

export { UserController };
