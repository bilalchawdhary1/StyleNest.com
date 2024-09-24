import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, price, name }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/products/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt="prodect image"
          className="transition hover:scale-110 ease-in-out"
        />
      </div>
      <p className="text-sm pt-3 pb-1">{name}</p>
      <p className="text-sm font-medium">
        {price}
        {currency}
      </p>
    </Link>
  );
};

export default ProductItem;
