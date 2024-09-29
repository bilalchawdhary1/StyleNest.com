import { useState } from "react"

const Login = () => {
  const [currentState , setCurrentState] = useState('Sing Up');
  const handleToggle = () => {
    setCurrentState(currentState === 'Sing Up'? 'Login' : 'Sing Up');
  }
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    // logic for login
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700">
      <div className="inline-flex gap-2 mb-2 items-center mt-10">
        <p className="parta-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === 'Login' ? <h1 className="parta-regular text-2xl font-medium mb-4">Welcome back!</h1>  : ''}
      {currentState === 'Login' ? '' : <input type="text" placeholder="name" className="w-full py-2 px-3 border rounded-md border-gray-400" required/> }
      <input type="email" placeholder="email" className="w-full py-2 px-3 border rounded-md border-gray-400" required />
      <input type="password" placeholder="password" className="w-full py-2 px-3 border rounded-md border-gray-400" required />
      <button className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800" > {currentState === 'Login'? 'Sing In' : 'Sing Up'}</button>
      <div className="flex items-center justify-center mt-4">
        <p className="parta-regular text-sm">Already have an account? </p>
        <button onClick={handleToggle} className="parta-semibold text-sm hover:text-black"> {currentState === 'Sing Up'? 'Login' : 'Sign Up'}</button>
      </div>
      <p className="text-center text-gray-500 mt-1">Forgot your password? <a href="#" className="parta-semibold text-sm hover:text-black">Reset it</a></p>
    </form>
  )
}

export default Login
