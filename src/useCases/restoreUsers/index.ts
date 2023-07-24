import { RestoreUsersUseCase } from "./RestoreUsersUseCase";
import { RestoreUsersController } from "./RestoreUsersController";

const restoreUsersUseCase = new RestoreUsersUseCase();
const restoreUsers = new RestoreUsersController(restoreUsersUseCase);

export { restoreUsers };