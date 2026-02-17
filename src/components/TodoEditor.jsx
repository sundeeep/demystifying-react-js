import { useState } from 'react';
import AppwriteTablesDB from '../appwrite-services/AppwriteTablesDB';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';

const TodoEditor = () => {
    const [todoText, setTodoText] = useState("");
    const appwriteTablesDb = new AppwriteTablesDB();
    const queryClient = useQueryClient()

    const createNewTodo = async () => {
        const newTodoData = await appwriteTablesDb.createRecord(import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_TODOS_TABLE_ID, { text: todoText, description: "" })
        console.log(newTodoData);
        return newTodoData;
    }

    const mutation = useMutation({
        mutationFn: createNewTodo,
        onSuccess: () => {
            // invalidate the cache and refetch the todos
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            setTodoText("");
            toast.success("New todo has been added, successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        },
        onError: (error) => {
            console.error(error);
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    })

    const handleTodoSubmission = async (event) => {
        event.preventDefault();
        // trigger the mutation: CREATE/POST
        mutation.mutate()
    }

    return (
        <form className='flex' onSubmit={handleTodoSubmission}>
            <input className='border border-red-400 bg-red-50 text-black p-3' value={todoText} onChange={(event) => setTodoText(event.target.value)} type="text" />
            <button className='bg-red-600 text-white rounded-md p-3' type="submit">Add todo</button>
        </form>
    )
}

export default TodoEditor