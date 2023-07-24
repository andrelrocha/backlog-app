import { CreateUsersUseCase } from "./CreateUsersUseCase";
import { CreateUsersController } from "./CreateUsersController";

const createUsersUseCase = new CreateUsersUseCase();
const createUsers = new CreateUsersController(createUsersUseCase);

export { createUsers };