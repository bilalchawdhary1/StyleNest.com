import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
const Products = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size , setSize ] = useState()

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]); // getting first image as default
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*-------------- product data ------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*------------- products image -------------*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => {
              return (
                <img
                  src={item}
                  alt="productdata"
                  key={index}
                  className="w-[24%] sm:mb-3 sm:w-full flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(item)}
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/*------------- products details -------------*/}
        <div className="flex-1">
          <h1 className="font-medium mt-2 text-2xl">{productData.name}</h1>
          <div className="flex gap-1  mt-2 items-center">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="text-sm text-gray-500">4.5 (120 reviews)</p>
          </div>
          <p className="mt-5 text-3xl font-medium ">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description.substring(0, 200)}
          </p>
          <div className="flex flex-col gap-4 my-8">
          <p>Select Size </p>
          <div className="flex gap-2">
              {productData.sizes.map((item , index)=>{
                return (
                  <button onClick={()=>setSize(item)} key={index} className={`border py-2  px-4 text-sm font-medium bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}>
                    {item}
                  </button>
                );
              })}
            </div>
        </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
