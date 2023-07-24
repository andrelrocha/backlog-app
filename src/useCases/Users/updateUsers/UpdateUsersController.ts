import { NextFunction, Request, Response } from "express";

import { UpdateUsersUseCase } from "./UpdateUsersUseCase";

class UpdateUsersController {
    constructor(private updateUsersUseCase: UpdateUsersUseCase) { }

    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const { id } = request.params;
            
            const { name, email } = request.body;

            const updatedPerson = await this.updateUsersUseCase.execute({ id, name, email });

            return response.status(200).send(updatedPerson);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { UpdateUsersController };