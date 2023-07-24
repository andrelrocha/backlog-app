import models from "../../db/models";
import { v4 as uuidv4 } from "uuid";

interface IRequest {
    name: string;
    email: string;
}

class CreateUsersUseCase {
    async execute({ name, email }: IRequest) {
        try {
            const userAlreadyExists = await models.Users.findOne({ where: { email } });

            if (userAlreadyExists) {
                throw new Error("User already exists");
            }

            if (!name || !email) {
                throw new Error("Missing parameters needed for user creation");
            }

            const id = uuidv4();
            
            const newUser = await models.Users.create({ id, name, email });

            return newUser;
        } catch (err) {
            console.error(err);
            throw new Error("Error creating user");
        }
    }
}

export { CreateUsersUseCase };