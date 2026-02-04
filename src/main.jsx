import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import ProfilePage from './pages/ProfilePage.jsx';
import RegisterUserPage from './pages/RegisterUserPage.jsx';
import LogInPage from './pages/LogInPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "/register",
        element: <RegisterUserPage />
    },
    {
        path: "/login",
        element: <LogInPage />
    }
])

const rootDiv = document.getElementById("root");
createRoot(rootDiv).render(
    <RouterProvider router={router} />
)