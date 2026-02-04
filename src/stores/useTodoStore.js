import { create } from "zustand";


const useTodoStore = create((set) => ({
    todos: [],
    username: "",
    createTodo: (newTodo) => (set((state) => ({todos: [...state.todos, newTodo]})))
}))

export default useTodoStore;

// set({todos: [...newtods]}) 
// (state) => ({todos: [...state.todos, newTodo]}) -> {todos: [...newtods]}

// {
//     todos: [], // old state key
//     createTodo: () => (),
//     todos: ["go to school"] // newly merged value
// }