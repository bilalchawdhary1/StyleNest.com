import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";
const Products = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState();

  useEffect(() => {
    const fetchProductData = async () => {
      products.map((item) => {
        if (item._id === productId) {
          setProductData(item);
          setImage(item.image[0]); // getting first image as default
          return null;
        }
      });
    };
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* -------------- product data ------------- */}
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
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    onClick={() => setSize(item)}
                    key={index}
                    className={`border py-2  px-4 text-sm font-medium bg-gray-100 ${
                      item === size ? "border-orange-500" : ""
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on the product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* -------------- Description $ Review Section products ------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews 4.5 (120)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Discover the perfect blend of style and comfort with our latest
            collection. Each piece is designed to elevate your wardrobe with
            premium quality materials and attention to detail. From casual to
            chic, find the perfect fit for every occasion. Explore the full
            product features, sizing details, and care instructions below.
          </p>
          <p>
            See what our customers are saying! Real reviews from real shoppers –
            find out why this product is a must-have. Your feedback helps us
            improve, so dont forget to share your experience after your
            purchase!
          </p>
        </div>
      </div>
      {/* -------------- display related products ------------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
