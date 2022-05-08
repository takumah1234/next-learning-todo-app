import firebase from 'firebase/app';
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../util/firebase";

export async function getToDoList() {
    var result = []

    await getDocs(collection(db, 'todoItems')).then((snapShot) => {
        snapShot.forEach((item) => {
            result.push({
                id: item.id,
                context: item.data().context,
            });
        });
    });

    return result
}

export async function findTodoItem(id){
    var result = []

    await getDocs(collection(db, 'todoItems')).then((snapShot) => {
        snapShot.forEach((item) => {
            if (item.id == id){
                result.push({
                    id: item.id,
                    context: item.data().context,
                });
            }
        });
    });

    return result[0]
}

export async function saveToDoList(context) {
    const docRef = await addDoc(collection(db, 'todoItems'), {
        context,
    });
    return {
        id: docRef.id,
        context,
    };
}

export async function deleteTodoItem(id){
    try{
        deleteDoc(doc(db, 'todoItems', id));
        return id
    }catch (error){
        throw error
    }
}