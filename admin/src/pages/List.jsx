import axios from "axios";
import { backendUrl } from "../App";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);
  const fatchData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
      console.log(response.data);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    fatchData();
  }, []);
  return (
    <>
      <p className="mb-2">All Products List</p>
      {/* list table title  */}
      <div className=" hidden md:flex justify-between items-center bg-gray-100 px-4 py-2 text-gray-600 uppercase font-semibold">
        <span>Image</span>
        <span>Name</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Actions</span>
      </div>
      {/* Product list  here*/}
      {list.map((item) => (
        <div key={item._id} className="flex justify-between items-center bg-white px-4 py-2 text-gray-600">
          <img src={backendUrl + item.image[0]} alt="" className="w-12" />
          <span>{item.image[0]}</span>
          <span>{item.name}</span>
          <span>{item.category}</span>
          <span>{item.price}</span>
          <span>{item.quantity}</span>
          <span>
            <button className="px-2 py-1 border border-gray-400 text-gray-700">
              Edit
            </button>
            <button className="px-2 py-1 border border-gray-400 text-gray-700">
              Delete
            </button>
          </span>
        </div>
      ))}
    </>
  );
};

export default List;
