import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import PropTypes from 'prop-types'; 

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if(response.data.success){
        setToken(response.data.token);
      }else{
        toast.error(response.data.messege)
        
      }
    } catch (error) {
      console.log(error);
      toast.error(error.messege)
    } 
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
        >
          <div className="mb-3 min-w-72">
            <p className="text-gray-700 font-medium mb-2 text-sm">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full py-2 px-3 border rounded-md border-gray-400 outline-none"
              type="email"
              placeholder="Email Here"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-gray-700 font-medium mb-2 text-sm">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full py-2 px-3 border rounded-md border-gray-400 outline-none"
              type="password"
              placeholder="Password Here"
            />
          </div>

          <button
            className="mt-2 w-full text-white py-2 px-4 rounded-md bg-black text-sm"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
// Define prop types
Login.propTypes = {
    setToken: PropTypes.func.isRequired,  // Correctly setting prop type as function
  };
export default Login;
