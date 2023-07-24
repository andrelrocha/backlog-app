import { UpdateUsersUseCase } from "./UpdateUsersUseCase";
import { UpdateUsersController } from "./UpdateUsersController";

const updateUsersUseCase = new UpdateUsersUseCase();
const updateUsers = new UpdateUsersController(updateUsersUseCase);

export { updateUsers };
