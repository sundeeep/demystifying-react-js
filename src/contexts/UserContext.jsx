import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const logInUser = (currentUser) => {
        setUser(currentUser)
    }

    const logOutUser = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user, logInUser, logOutUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if(!context) throw new Error("please! provide/ wrap user context to the react app");
    return context;
}