import { useContext } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../Utils";

import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const handleDelete = (id) => {
    const filteredProducts = () =>
      context.cartProducts.filter((product) => product.id != id);
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "10.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-xl">My Order</h2>
        <button>
          <XCircleIcon
            onClick={context.closeCheckoutSideMenu}
            className="size-6 text-black h-6 w-6"
          />
        </button>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            imagesUrl={product.images}
            id={product.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-exl">
            ${totalPrice(context.cartProducts).toFixed(2)}
          </span>
        </p>
        <Link to='my-orders/last'>
          <button
            className="w-full bg-black py-3 text-white rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
