import {BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Card from "./pages/Card";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import PlaceHolder from "./pages/PlaceHolder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return <Router>
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/collection" element={<Collection/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/placeholder" element={<PlaceHolder/>}/>
    </Routes> 
    <Footer/>
    </div>
  </Router>
}

export default App
