import React from 'react'
import PrimaryButton from '../components/PrimaryButton';
import { Link, useNavigate } from 'react-router';
import AppwriteAccount from '../appwrite-services/AppwriteAccount';
import { Bounce, toast } from 'react-toastify';

const RegisterUserPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const navigate = useNavigate();

  const appwriteAccount = new AppwriteAccount()
  const registerNewUser = async (event) => {
    try {
      event.preventDefault();
      const newUserData = {
        name,
        email,
        password
      }

      const newUserResponse = await appwriteAccount.createNewUser(newUserData)
      console.log(newUserResponse);
      if (newUserResponse?.$id) {
        navigate("/login")
        toast.success("User registered successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      console.log("finally")
    }
  }
  return (
    <div className='h-screen w-screen bg-red-300 flex items-center justify-center'>
      <form className='bg-white p-6 rounded-2xl border-2 border-amber-300 flex flex-col gap-3' onSubmit={registerNewUser}>
        <input onChange={(event) => setName(event.target.value)} value={name} required placeholder="Enter your name..." type="text" />

        <input onChange={(event) => setEmail(event.target.value)} value={email} required placeholder="Enter your email..." type="email" />

        <input onChange={(event) => setPassword(event.target.value)} value={password} required placeholder="Enter your password" type="password" />

        <input onChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword} required placeholder="Confirm your password (retype)" type="password" />

        <PrimaryButton type="submit">
          Register
        </PrimaryButton>
        <p>
          Alread an user? <Link to="/login" className="text-blue-600 underline">Log In</Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterUserPage