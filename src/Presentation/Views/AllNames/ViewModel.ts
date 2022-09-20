import { useState } from "react";
import { GetUsersUseCase } from "../../../Domain/UseCase/User/GetUsers";

interface UserObject {
    id: string,
    name: string
}

export default function AllNamesViewModel() {

    const [users, setUsers] = useState<Array<UserObject>>([]);

    async function getUsers() {
        const docs = await GetUsersUseCase();
        setUsers(docs.map(((doc: any) => ({ ...doc.data(), id: doc.id }))));
    }

    return {
        getUsers,
        users
    }
}