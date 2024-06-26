import { createContext, useState ,useEffect} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //shopping cart . Incrment quantity
  const [count, setCount] = useState(0);
  
  //Product detail .  Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

    //Checkout Side Menu . Open/Close
    const [isCheckoutSideMenuOpen, setisCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setisCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setisCheckoutSideMenuOpen(false);

  //Product Detail . Show Product
  const [productToShow, setProductToShow] = useState({})
  
  //shopping Cart . Add Products to Cart
  const [cartProducts, setCartProducts] = useState([])

  //shopping Cart . Add order
  const [order, setOrder] = useState([])

//get Products
const [items, setItems] = useState(null);
const [filteredItems, setFilteredItems] = useState(null);


//get Products  By Title
const [searchByTitle, setSearchByTitle] = useState(null);

useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      setItems(data.products)}
    );
}, []);

const filteredItemsByTitle = (items, searchByTitle) => {
  return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
}

useEffect(() => {
  if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
}, [items, searchByTitle])


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems
  
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
