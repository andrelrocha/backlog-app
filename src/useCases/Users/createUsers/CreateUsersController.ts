import { NextFunction, Request, Response } from "express";

import { CreateUsersUseCase } from "./CreateUsersUseCase";

class CreateUsersController {

    constructor(private createUsers: CreateUsersUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { name, email } = req.body;

            const newUser = await this.createUsers.execute({ name, email });

            return res.status(201).send({ message: "User created successfully", newUser });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { CreateUsersController };