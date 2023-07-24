import models from "../../db/models";

class GetUsersByIdUseCase {
    async execute(id: string) {
        try {
            const user = await models.Users.scope("all").findByPk(id, {
                paranoid: false
            });

            if (!user) {
                throw new Error("User not found");
            }

            return user;
        } catch (err) {
            console.error(err);
            throw new Error("Error getting user");
        }
    }
}

export { GetUsersByIdUseCase };