import { Router } from "express";

import { createUsers } from "../useCases/createUsers";

const usersRoutes = Router();


usersRoutes.post("/", (req, res, next) => {
    return createUsers.handle(req, res, next);
});

export { usersRoutes };