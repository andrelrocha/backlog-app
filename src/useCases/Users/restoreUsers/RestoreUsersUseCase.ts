import models from "../../db/models";

class RestoreUsersUseCase {
    async execute(id: string) {
        try {
            const user = await models.Users.findByPk(id, {
                paranoid: false
            });

            if (!user) {
                throw new Error("User not found");
            }

            await user.restore();

            return user;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
        
    }
}

export { RestoreUsersUseCase };