import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";
import { UserAlreadyExistsError } from "./exceptions";

class UserController {
    async registry(request: Request, response: Response) {
        const { name, email } = request.body;

        const usersRepository = getRepository(User);

        const isUserExists = usersRepository.findOne({ email });
        if (isUserExists) {
            return response.status(400).send(new UserAlreadyExistsError());
        }

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);

        return response.send(user);
    }
}

export { UserController };