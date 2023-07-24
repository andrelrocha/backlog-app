import models from "../../db/models";

interface IRequest {
    id: string;
    name: string;
    email: string;
}

class UpdateUsersUseCase {
    async execute({ id, name, email }: IRequest) {
        try {
            const user = await models.Users.findByPk(id, { paranoid: false });

            if (!user) {
                throw new Error("User not found");
            }

            if (!name && !email) {
                throw new Error("Name or email are required fields for updating an user");
            }

            await user.update({ name, email });

            return user;
        } catch (err) {
            console.error(err);
            throw new Error(err.message);
        }
    }

}

export { UpdateUsersUseCase };