import { GetUsersUseCase } from "./GetUsersUseCase";
import { GetUsersController } from "./GetUsersController";

const getUsersUseCase = new GetUsersUseCase();
const getUsers = new GetUsersController(getUsersUseCase);

export { getUsers };