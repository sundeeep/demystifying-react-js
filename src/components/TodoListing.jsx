import { LoaderPinwheel } from 'lucide-react';
import AppwriteTablesDB from '../appwrite-services/AppwriteTablesDB';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const appwriteTablesDb = new AppwriteTablesDB();
export const fetchAllTodos = async () => {
    try {
        console.log("fetching todos")
        const data = await appwriteTablesDb.getAllRecords(import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_TODOS_TABLE_ID)
        throw new Error("Sample Error Found!")
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

const TodoListing = () => {

    // const { data: todos, isLoading, isPending, isFetching, error } = useQuery({
    //     queryKey: ["todos"],
    //     queryFn: fetchAllTodos,
    //     throwOnError: (error) => {
    //         console.log(error.message)
    //     }
    // })

    const [isPending, setIsPending] = useState(true);

    if (isPending) {
        console.log("isPending : true")
        return (
            <h1 className='text-5xl flex items-center gap-2'>
                <LoaderPinwheel size={160} className='animate-spin' />
                
            </h1>
        )
    }

    if (isLoading) {
        console.log("isLoading : true");
        return (
            <h1 className='text-5xl'>
                Todos are Loading...
            </h1>
        )
    }

    return (
        <div className='flex flex-col items-center gap-3'>
            {
                error && <p className='text-red-600 font-semibold'>{error?.message}</p>
            }
            {
                isLoading && <p>Loading...</p>
            }
            {
                isFetching && <p>Fetching New Todos...</p>
            }
            {
                todos?.map((todo) => (
                    <article key={todo?.$id} className='p-3 bg-red-200 rounded-md shadow-sm'>
                        <h1 className="font-semibold text-xl">{todo?.text}</h1>
                        <p>{todo.description ? todo.description : "No Description"}</p>
                    </article>
                ))
            }
        </div>
    )
}

export default TodoListing