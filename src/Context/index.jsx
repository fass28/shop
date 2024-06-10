import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //shopping cart . Incrment quantity
  const [count, setCount] = useState(0);
  
  //Product detail .  Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Product Detail . Show Product
  const [productToShow, setProductToShow] = useState({})
  
  //shopping Cart . Add Products to Cart
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
