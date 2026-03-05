import { Link } from 'react-router'
import useUserStore from '../stores/useUserStore'
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const AppHeader = () => {
    const currentUser = useUserStore((state) => state.user);
    const {theme, toggleTheme} = useTheme()

    return (
        <header>
            <nav style={theme === "dark" ? {backgroundColor: "#454545"} : {backgroundColor: "gray"} } className="p-3 rounded-md flex items-center gap-3">
                <Link to="/" className="text-blue-600 hover:underline hover:italic">Home</Link>
                <Link to="/todo" className="text-blue-600 hover:underline hover:italic">Todo App</Link>
                <Link to="/counter" className="text-blue-600 hover:underline hover:italic">Counter</Link>
                <Link to="/profile" className="text-blue-600 hover:underline hover:italic">My Profile</Link>
                {(currentUser?.$id && currentUser?.labels?.includes("admin")) && <Link to="/admin-dashboard" className="text-blue-600 hover:underline hover:italic">Admin Dashboard</Link>  }
                <button className='cursor-pointer' onClick={toggleTheme}>{theme === "dark" ? <Moon className='text-white'/> : <Sun className='text-yellow-600'/>}</button>
            </nav>
        </header>
    )
}

export default AppHeader
