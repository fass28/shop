import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";







function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-6">
        <Link to='/my-orders' className="absolute left-0">
        <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"></ChevronLeftIcon>
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            imagesUrl={product.images}
            id={product.id}
          />
        ))}
      </div>
    </Layout>
  );
}
export default MyOrder;
