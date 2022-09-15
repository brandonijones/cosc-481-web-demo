import React, { FC, useEffect, useState } from 'react';
import { db } from '../../../Data/DataSource/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const AllNames: FC = () => {
    const [users, setUsers] = useState<Array<object>>([]);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <div>
            { users.map((user: any) => {
                return (
                    <div>
                        <p> {user.name} </p>
                    </div>
                );
            }) }
        </div>
    );
}