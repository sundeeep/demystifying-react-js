import { Link } from 'react-router'
import useUserStore from '../stores/useUserStore'

const AppHeader = () => {
    const currentUser = useUserStore((state) => state.user);

    return (
        <header>
            <nav className="p-3 rounded-md bg-red-200 flex items-center gap-3">
                <Link to="/" className="text-blue-600 hover:underline hover:italic">Home</Link>
                <Link to="/todo" className="text-blue-600 hover:underline hover:italic">Todo App</Link>
                <Link to="/profile" className="text-blue-600 hover:underline hover:italic">My Profile</Link>
                {(currentUser?.$id && currentUser?.labels?.includes("admin")) && <Link to="/admin-dashboard" className="text-blue-600 hover:underline hover:italic">Admin Dashboard</Link>  }
            </nav>
        </header>
    )
}

export default AppHeader
