import models from "../../db/models";

class GetUsersUseCase {
    async execute(limit: number, page: number, order: any) {
        try{
            const [field, orderType] = order.split(":");
            
            const allUsers = await models.Users.scope("all").findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType === "1" ? "ASC" : "DESC"]]
            });

            return allUsers;
        } catch (error) {
            console.error("An error occurred while loading Users's database:", error);
            throw error;
        }}
}

export { GetUsersUseCase };