import { useState } from 'react';
import { CreateUserUseCase } from '../../../Domain/UseCase/User/CreateUser';
import { useNavigate } from 'react-router-dom';

export default function HomeViewModel() {

    const navigate = useNavigate();
    const [newName, setNewName] = useState<string>("");

    async function createUser() {
        await CreateUserUseCase(newName).then((docRef) => {
            navigate(`/hello/${docRef.id}`);
        });
    }

    function onChange(value: string) {
        setNewName(value);
    }

    return {
        createUser,
        onChange
    }
}