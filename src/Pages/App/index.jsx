import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import Navbar from "../../Components/NavBar";
import Beauty from "../Categories/Beauty";
import Fragrances from "../Categories/Fragrances";
import Furnitures from "../Categories/Furnitures";
import Groceries from "../Categories/Groceries";
import CheckoutSideMenu from  '../../Components/CheckoutSideMenu'

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "my-account", element: <MyAccount /> },
    { path: "my-order", element: <MyOrder /> },
    { path: "my-orders", element: <MyOrders /> },
    { path: "my-orders/last", element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: "sing-in", element: <SignIn /> },
    { path: "/beauty", element: <Beauty /> },
    { path: "/fragrances", element: <Fragrances /> },
    { path: "/furnitures", element: <Furnitures /> },
    { path: "/groceries", element: <Groceries /> },

  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
