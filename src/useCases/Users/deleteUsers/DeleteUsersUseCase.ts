import models from "../../db/models";

class DeleteUsersUseCase {
    async execute(id: string) {
        try {
            const user = await models.Users.findByPk(id);

            if (!user) {
                throw new Error("User not found");
            }

            await user.destroy();
        } catch (err) {
            console.error(err);
            throw new Error(err.message);
        }
    }
}

export { DeleteUsersUseCase };