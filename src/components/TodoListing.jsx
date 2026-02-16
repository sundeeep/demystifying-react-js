import { useEffect } from 'react';
import AppwriteTablesDB from '../appwrite-services/AppwriteTablesDB';
import { useQuery } from '@tanstack/react-query';

const appwriteTablesDb = new AppwriteTablesDB();
export const fetchAllTodos = async() => {
    try {
        const data = await appwriteTablesDb.getAllRecords("693d42e9002449e31781", "todos")
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

const TodoListing = () => {

    const {data: todos, isLoading, isPending: isTodosPending, isFetching, error} = useQuery({
        queryKey: ["todos"],
        queryFn: fetchAllTodos,
        refetchOnWindowFocus: true
    })

    if(isTodosPending){
        return <h1 className='text-5xl'>Todos are Loading...</h1>
    }

    return (
        <div className='flex flex-col items-center gap-3'>
            {
                todos.map((todo) => (
                    <article key={todo?.$id} className='p-3 bg-red-200 rounded-md shadow-sm'>
                        <h1 className="font-semibold text-xl">{todo?.text}</h1>
                        <p>{todo?.description}</p>
                    </article>
                ))
            }
        </div>
    )
}

export default TodoListing