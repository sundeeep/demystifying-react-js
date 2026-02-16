import { create } from "zustand";

const useUserStore = create((set) => ({
    user: null,
    setUser: (currentUser) => set({user: currentUser}),
    logOut: () => set({user: {}})
}))

export default useUserStore;