import {createContext, useContext, useState} from "react"

export const ThemeContext = createContext(null)

export const ThemeProvider = (props) => {
    const {children} = props;

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
         console.log("toggled the theme!!!")
        setTheme(theme === "dark" ? "light" : "dark")
    }
    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) throw new Error("Please wrap the react app components inside theme provider")
    return context;
}