import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

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
      <div className="px-6">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            imagesUrl={product.images}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
