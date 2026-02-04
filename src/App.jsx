import { useEffect } from "react";
import TodoApp from "./components/TodoApp";
import AppwriteAccount from "./appwrite/AppwriteAccount";
import useUserStore from "./stores/useUserStore";
import { Link } from "react-router";

function App() {
  const appwriteAccount = new AppwriteAccount();
  const setUser = useUserStore((state) => state.setUser)

  const getCurrentUser = async () => {
    try {
      const currentUser = await appwriteAccount.getCurrentUser();
      console.log(currentUser);
      setUser(currentUser);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <>
      <nav>
        <Link to="/profile">My Profile</Link>
      </nav>
      <h1>Home Page</h1>
    </>
  )
}

export default App;