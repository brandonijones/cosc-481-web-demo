import { useState } from "react";
import { GetUserUseCase } from "../../../Domain/UseCase/User/GetUser";


export default function HelloNameViewModel() {

    const [name, setName] = useState<string>("");

    async function getUser(id: string) {
        const result: any = await GetUserUseCase(id);
        setName(result.name);
    }

    return {
        name,
        getUser
    }
}