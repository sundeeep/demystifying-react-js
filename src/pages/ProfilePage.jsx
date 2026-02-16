import { useNavigate } from 'react-router';
import AppwriteAccount from '../appwrite-services/AppwriteAccount'
import useUserStore from '../stores/useUserStore'
import { fetchAllTodos } from '../components/TodoListing';
import { useQuery } from '@tanstack/react-query';

const ProfilePage = () => {
  const currentUser = useUserStore((state) => state.user)
  const appwriteAccount = new AppwriteAccount();
  const navigate = useNavigate();

  const {data: todos, isLoading, isPending: isTodosPending, isFetching, error} = useQuery({
        queryKey: ["todos"],
        queryFn: fetchAllTodos
    })

  console.log("Profile page rendered!")

  const handleLogout = async() => {
    try {
      const result = await appwriteAccount.logOutCurrentUser();
      console.log(result); 
      if(!result?.message){
        navigate("/login")
      }
    } catch (error) {
      console.error(error)
    }finally{

    }
  }
  return (
    <div>
      {
        currentUser?.name
      }

      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default ProfilePage