import { create } from "zustand";

const useUserStore = create((set) => ({
    user: {},
    setUser: (currentUser) => set({user: currentUser})
}))

export default useUserStore;


const state = {
    user: {}
    
}