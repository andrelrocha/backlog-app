import { NextFunction, Request, Response } from "express";

import { RestoreUsersUseCase } from "./RestoreUsersUseCase";

class RestoreUsersController {
    constructor(private restoreUsersUseCase: RestoreUsersUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;

            const user = await this.restoreUsersUseCase.execute(id);

            return res.status(200).send({ message: { "User record restored": user } });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }    
    }
}

export { RestoreUsersController };