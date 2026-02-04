import { useState } from "react";
import { useNavigate } from "react-router";
import PrimaryButton from "../components/PrimaryButton";
import AppwriteAccount from "../appwrite/AppwriteAccount";

const LogInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const appwriteAccount = new AppwriteAccount()
    const logInUser = async(event) => {
      try {
        event.preventDefault();
        const logInData = {
          email,
          password
        }

        const logInResponse = await appwriteAccount.logInWithEmailAndPassword(logInData);

        console.log(logInResponse);

        navigate("/");
        
      } catch (error) {
        console.error(error);
      }finally{
        console.log("finally")
      }
    }
  return (
    <div className='h-screen w-screen bg-red-300 flex items-center justify-center'>
      <form className='bg-white p-15 rounded-2xl border-2 border-amber-300 flex flex-col gap-3' onSubmit={logInUser}>
     
        <input onChange={(event) =>setEmail(event.target.value)} value={email} required placeholder="Enter your email..." type="email" />

        <input onChange={(event) =>setPassword(event.target.value)} value={password} required placeholder="Enter your password" type="password" />

        <PrimaryButton type="submit">
          Login
        </PrimaryButton>
      </form>
    </div>
  )
}

export default LogInPage