import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h[80vh]">
      {/* ************Left Side********  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELEVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Frist name"
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="border border-gray-300 rounded w-full py-1.5 px-3.5"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded w-full py-1.5 px-3.5"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zip code"
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
          />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          className="border border-gray-300 rounded w-full py-1.5 px-3.5"
        />
      </div>
      {/* ************Right Side********  */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ************Payment Methord Selection********  */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <Link to={"/order"}>
              <button className="bg-black text-white py-3 px-16 transition duration-300 text-sm">
                PLACE ORDER
              </button>
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              *Please note that we will not charge you until the order is
              shipped
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
