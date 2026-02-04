import React from 'react'
import PrimaryButton from '../components/PrimaryButton';
import { useNavigate } from 'react-router';
import AppwriteAccount from '../appwrite/AppwriteAccount';

const RegisterUserPage = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const navigate = useNavigate();

    const appwriteAccount = new AppwriteAccount()
    const registerNewUser = async(event) => {
      try {
        event.preventDefault();
        const newUserData = {
          name, 
          email,
          password
        }

        const newUserResponse = await appwriteAccount.createNewUser(newUserData)

        console.log(newUserResponse);
        if(newUserResponse?.$id){
          navigate("/login")
        }
      } catch (error) {
        console.error(error);
      }finally{
        console.log("finally")
      }
    }
  return (
    <div className='h-screen w-screen bg-red-300 flex items-center justify-center'>
      <form className='bg-white p-15 rounded-2xl border-2 border-amber-300 flex flex-col gap-3' onSubmit={registerNewUser}>
        <input onChange={(event) => setName(event.target.value)} value={name} required placeholder="Enter your name..." type="text" />

        <input onChange={(event) =>setEmail(event.target.value)} value={email} required placeholder="Enter your email..." type="email" />

        <input onChange={(event) =>setPassword(event.target.value)} value={password} required placeholder="Enter your password" type="password" />

        <input onChange={(event) =>setConfirmPassword(event.target.value)} value={confirmPassword} required placeholder="Confirm your password (retype)" type="password" />

        <PrimaryButton type="submit">
          Register
        </PrimaryButton>
      </form>
    </div>
  )
}

export default RegisterUserPage