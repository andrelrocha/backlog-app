import { Router } from "express";

import { createUsers } from "../useCases/createUsers";
import { getUsersById } from "../useCases/getUsersById";

const usersRoutes = Router();

usersRoutes.get("/:id", (req, res, next) => {
    return getUsersById.handle(req, res, next);
});

usersRoutes.post("/", (req, res, next) => {
    return createUsers.handle(req, res, next);
});

export { usersRoutes };