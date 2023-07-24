import { Router } from "express";

import { createUsers } from "../useCases/createUsers";
import { deleteUsers } from "../useCases/deleteUsers";
import { getUsers } from "../useCases/getUsers";
import { getUsersById } from "../useCases/getUsersById";
import { restoreUsers } from "../useCases/restoreUsers";
import { updateUsers } from "../useCases/updateUsers";

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

usersRoutes.post("/restore/:id", (req, res, next) => {
    return restoreUsers.handle(req, res, next);
});

usersRoutes.delete("/:id", (req, res, next) => {
    return deleteUsers.handle(req, res, next);
});

usersRoutes.put("/:id", (req, res, next) => {
    return updateUsers.handle(req, res, next);
});

export { usersRoutes };