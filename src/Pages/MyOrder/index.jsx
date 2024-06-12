import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  console.log(context.order);
  return (
    <Layout>
      MyOrder
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
