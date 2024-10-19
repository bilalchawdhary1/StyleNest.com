import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import List from "./pages/List";
import Order from "./pages/Order";
import Add from "./pages/Add";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export  const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!token && savedToken) {
      setToken(savedToken); // Only set token if it's not already set
    }
  }, []); // Only run once after the component mounts
  return (
    <div className="bg-gray-50 min-h-screen ">
            <ToastContainer/>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <SideBar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
            <Routes>
              <Route path="/add" element={<Add token={token} />} />
              <Route path="/order" element={<Order  token={token}/>} />
              <Route path="/list" element={<List  token={token}/>} />
            </Routes>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
