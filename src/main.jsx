import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import ProfilePage from './pages/ProfilePage.jsx';
import RegisterUserPage from './pages/RegisterUserPage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage.jsx';
import TodoAppPage from './pages/TodoAppPage.jsx';
import AdminDashboardLayout from './pages/admin/AdminDashboardLayout.jsx';
import OverviewPage from './pages/admin/OverviewPage.jsx';
import AdminCoursesPage from './pages/admin/AdminCoursesPage.jsx';
import AdminTransactionsPage from './pages/admin/AdminTransactionsPage.jsx';
import AdminQuizesPage from './pages/admin/AdminQuizesPage.jsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/query-client.js';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "profile",
                element: <ProfilePage />
            },
            {
                path: "todo",
                element: <TodoAppPage />
            }
        ]
    },
    {
        path: "/admin-dashboard",
        element: <AdminDashboardLayout />,
        children: [
            {
                index: true,
                element: <OverviewPage />
            },
            {
                path: "courses",
                element: <AdminCoursesPage />
            },
            {
                path: "quizes",
                element: <AdminQuizesPage />
            },
            {
                path: "transactions",
                element: <AdminTransactionsPage />
            }
        ]
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
    <>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
            <ToastContainer />
        </QueryClientProvider>
    </>
)