import { Link, Outlet } from "react-router"

const AdminDashboardLayout = () => {
  return (
    <div className="h-screen w-screen flex gap-6 bg-teal-50 p-6">
        <div className="bg-red-200 rounded-2xl w-[20%] h-full p-6 flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <img className="object-contain h-[50px] rounded-2xl" src="/st-logo.svg" alt="St. Dashboard" />
            <p className="text-xl text-black font-semibold">Dashboard</p>
          </div>
          <nav className="flex flex-col items-start">
            <Link className="text-blue-600 hover:underline hover:italic" to="/admin-dashboard/courses">Courses</Link>
            <Link className="text-blue-600 hover:underline hover:italic" to="/admin-dashboard/quizes">Quizes</Link>
            <Link className="text-blue-600 hover:underline hover:italic" to="/admin-dashboard/transactions">Transactions</Link>
          </nav>
        </div>

        <div className="w-[80%] h-full">
            <Outlet />
        </div>
    </div>
  )
}

export default AdminDashboardLayout
