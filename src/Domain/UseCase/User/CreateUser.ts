import { createUser } from "../../../Data/Repository/UserRepository";

export async function CreateUserUseCase(userName: string) {
    return await createUser(userName);
}