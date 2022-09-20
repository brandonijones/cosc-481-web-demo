import { db } from "../DataSource/firebase";
import { collection, getDoc, getDocs, addDoc, doc } from "firebase/firestore";
const usersCollectionRef = collection(db, "users");

// create user
export async function createUser(newName: string) {
    const result = await addDoc(usersCollectionRef, {name: newName});
    return result;
}

// get user
export async function getUser(userId: string) {
    const userDocumentReference = doc(db, "users", userId);
    const result = await getDoc(userDocumentReference);
    return result.data();
}

// get all users
export async function getUsers() {
    const result = await getDocs(usersCollectionRef);  
    return result.docs;
}