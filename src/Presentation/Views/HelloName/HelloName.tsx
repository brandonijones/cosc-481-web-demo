import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useViewModel from './ViewModel';

export const HelloName: FC = () => {
    const { id } = useParams<{id: string}>();
    const { name, getUser } = useViewModel();

    useEffect(() => {
        getUser(id || "");
    }, []);

    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
}