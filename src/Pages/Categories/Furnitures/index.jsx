import { useContext } from "react";
import { ShoppingCartContext } from "../../../Context";

import Layout from "../../../Components/Layout";
import Card from "../../../Components/Card";
import ProductDetail from "../../../Components/ProductDetail";

function Furnitures() {
  const context = useContext(ShoppingCartContext);
  const beautyItems = context.items?.filter(
    (item) => item.category == "furniture"
  );

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Furnitures Products</h1>
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
        {beautyItems?.map((items) => {
          return <Card key={items.id} data={items} />;
        })}
        <ProductDetail />
      </div>
    </Layout>
  );
}

export default Furnitures;
