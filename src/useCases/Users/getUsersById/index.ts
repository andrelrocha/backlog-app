import { GetUsersByIdUseCase } from "./GetUsersByIdUseCase";
import { GetUsersByIdController } from "./GetUsersByIdController";

const getUsersByIdUseCase = new GetUsersByIdUseCase();
const getUsersById = new GetUsersByIdController(getUsersByIdUseCase);

export { getUsersById };