import { FC, useEffect } from 'react';
import useViewModel from './ViewModel';

export const AllNames: FC = () => {
    const { users, getUsers } = useViewModel();

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            { users.map((user) => {
                return (
                    <div>
                        <p> {user.name} </p>
                    </div>
                );
            }) }
        </div>
    );
}