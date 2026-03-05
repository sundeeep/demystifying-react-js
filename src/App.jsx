import { useEffect } from "react";
import AppwriteAccount from "./appwrite-services/AppwriteAccount";
// import useUserStore from "./stores/useUserStore";
import { Outlet, useNavigate } from "react-router";
import AppHeader from "./components/AppHeader";
import { useTheme } from "./contexts/ThemeContext";
import { useUser } from "./contexts/UserContext";

function App() {
  const {theme} = useTheme()
  const {logInUser} = useUser()
  const appwriteAccount = new AppwriteAccount(); // appwrite-services

  console.log("/ page App component rendered!")

  const navigate = useNavigate()

  const getCurrentUser = async () => {
    try {
      const currentUser = await appwriteAccount.getCurrentUser();
      console.log(currentUser);
      logInUser(currentUser);
    } catch (error) {
      console.error(error)
      navigate("/login")
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, []) // componentDidMount()

  return (
    <div style={theme==="dark" ? {backgroundColor: "#454545", color:"#ffffff"} : {backgroundColor: "#f5f5f5", color: "#000000"}} className="h-screen">  
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;