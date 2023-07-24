import { NextFunction, Request, Response } from "express"; 

import { GetUsersByIdUseCase } from "./GetUsersByIdUseCase";

class GetUsersByIdController {

    constructor(private getUsersById: GetUsersByIdUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const  { id } = req.params;
            
            const user = await this.getUsersById.execute(id);

            return res.status(200).send(user);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { GetUsersByIdController };