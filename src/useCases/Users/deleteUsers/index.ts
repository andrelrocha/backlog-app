import { DeleteUsersUseCase } from "./DeleteUsersUseCase";
import { DeleteUsersController } from "./DeleteUsersController";

const deleteUsersUseCase = new DeleteUsersUseCase();
const deleteUsers = new DeleteUsersController(deleteUsersUseCase);

export { deleteUsers };