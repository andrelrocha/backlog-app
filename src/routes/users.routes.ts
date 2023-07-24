import { Router } from "express";

import { createUsers } from "../useCases/createUsers";
import { getUsers } from "../useCases/getUsers";
import { getUsersById } from "../useCases/getUsersById";

const usersRoutes = Router();

usersRoutes.get("/", (req, res, next) => {
    return getUsers.handle(req, res, next);
});

usersRoutes.get("/:id", (req, res, next) => {
    return getUsersById.handle(req, res, next);
});

usersRoutes.post("/", (req, res, next) => {
    return createUsers.handle(req, res, next);
});

export { usersRoutes };