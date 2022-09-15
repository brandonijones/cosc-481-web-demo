import { FC, useEffect, useState } from 'react';
import { db } from '../../../Data/DataSource/firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export const Home: FC = () => {
  
    const navigate = useNavigate();
    const [newName, setNewName] = useState("")
    const [users, setUsers] = useState("")
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newName}).then((docRef) => {
            // console.log(docRef.id);
            navigate(`/hello/${docRef.id}`);
        });
    };

    return (
        <div>
            <input placeholder="Name" 
            onChange={(event) => {
                setNewName(event.target.value);
            }}/>

            <button onClick={createUser}> Add Name </button>
         
        </div>
    );
}
