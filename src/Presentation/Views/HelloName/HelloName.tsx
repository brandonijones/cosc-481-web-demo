import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../Data/DataSource/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const HelloName: FC = () => {
    const { id } = useParams<{id: string}>();
    const [name, setName] = useState<string>("");
    const userDocumentReference = doc(db, "users", id + "");

    useEffect(() => {
        const getUser = async () => {
            const docSnap: any = await getDoc(userDocumentReference);
            setName(docSnap.data().name);
        };
        
        getUser();
    }, []);

    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
}