import models from "../../db/models";

interface IRequest {
    name: string;
    email: string;
}

class CreateUsersUseCase {
    async execute({ name, email }: IRequest) {
        try {
            const userAlreadyExists = await models.User.findOne({ where: { email } });

            if (userAlreadyExists) {
                throw new Error("User already exists");
            }

            if (!name || !email) {
                throw new Error("Missing parameters needed for user creation");
            }
            
            const newUser = await models.User.create({ name, email });

            return newUser;
        } catch (err) {
            console.error(err);
            throw new Error("Error creating user");
        }
    }
}

export { CreateUsersUseCase };