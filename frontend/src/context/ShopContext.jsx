import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  //********** add to Card here **********
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cardData = structuredClone(cartItem);
    if (cardData[itemId]) {
      if (cardData[itemId][size]) {
        cardData[itemId][size] += 1;
      } else {
        cardData[itemId][size] = 1;
      }
    } else {
      cardData[itemId] = {};
      cardData[itemId][size] = 1;
    }
    setCartItem(cardData);
  };
  //********** get Card Count of item here **********
  const getCardCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };
  //********** update Quantity of item here **********
  const updateQuantity = async (itemId, size, quantity) => {
    let cardData = structuredClone(cartItem);
    if (quantity <= 0) {
      delete cardData[itemId][size];
    } else {
      cardData[itemId][size] = quantity;
    }
    setCartItem(cardData);
  };
  //********** Get cart Amount here **********
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += products.find((product) => product._id === items)
             .price * cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItem,
    getCardCount,
    updateQuantity, // Add function to update quantity of cart item
    getCartAmount, // Add function to get total amount of cart items
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate the children prop
};
export default ShopContextProvider;
