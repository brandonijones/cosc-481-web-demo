import { getUsers } from "../../../Data/Repository/UserRepository";

export async function GetUsersUseCase() {
    return await getUsers();
}