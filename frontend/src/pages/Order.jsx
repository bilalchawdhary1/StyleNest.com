import { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
const Order = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      {products.slice(1, 4).map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-b text-gray-700 py-4"
        >
          <div className="flex items-start text-sm gap-6">
            <img src={item.image[0]} className="w-16 md:w-20" alt="" />
            <div>
              <p className="sm:text-base font-medium">{item.name}</p>
              <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                <p className="text-lg">
                  {currency}
                  {item.price}
                </p>
                <p>Quantity: 1</p>
                <p className="px-2 sm:px-3 sm:py-1  bg-slate-50">Size: M</p>
              </div>
              <p className="mt-2">
                Date: <span className="text-gray-400">29 , jul , 2024</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between md:w-1/2">
            <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
              <p className="text-sm md:text-base">Ready to ship</p>
            </div>
            <button className="border px-4 py-2 text-sm font-medium rounded-sm">TracK Order</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
