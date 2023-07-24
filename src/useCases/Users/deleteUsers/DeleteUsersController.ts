import { NextFunction, Request, Response } from "express"; 

import { DeleteUsersUseCase } from "./DeleteUsersUseCase";

class DeleteUsersController {
    constructor(private deleteUsersUseCase: DeleteUsersUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;

            await this.deleteUsersUseCase.execute(id);

            return res.status(204).send();
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { DeleteUsersController };