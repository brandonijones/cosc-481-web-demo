import { FC } from 'react';
import useViewModel from './ViewModel';

export const Home: FC = () => {
    const { createUser, onChange } = useViewModel();

    const createUserAndNavigate = () => {
        createUser();
    }

    return (
        <div>
            <input 
                placeholder="Name" 
                onChange={(event) => onChange(event.target.value) }
            />

            <button onClick={createUserAndNavigate}> Add Name </button>
         
        </div>
    );
}
