import { useEffect } from "react";
import AppwriteAccount from "./appwrite-services/AppwriteAccount";
import useUserStore from "./stores/useUserStore";
import { Outlet, useNavigate } from "react-router";
import AppHeader from "./components/AppHeader";

function App() {
  const appwriteAccount = new AppwriteAccount(); // appwrite-services
  const setUser = useUserStore((state) => state.setUser) // zustand store
  console.log("/ page App component rendered!")

  const navigate = useNavigate()

  const getCurrentUser = async () => {
    try {
      const currentUser = await appwriteAccount.getCurrentUser();
      console.log(currentUser);
      setUser(currentUser);
    } catch (error) {
      console.error(error)
      navigate("/login")
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, []) // componentDidMount()

  return (
    <div>
      
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;