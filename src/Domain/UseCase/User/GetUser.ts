import { getUser } from "../../../Data/Repository/UserRepository"

export async function GetUserUseCase(userId: string) {
    return await getUser(userId);
}