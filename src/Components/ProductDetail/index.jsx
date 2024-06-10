import { useContext } from "react";
import "./styles.css";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  const some = 'asdasd'

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>
          <XCircleIcon 
          onClick={context.closeProductDetail}
          className="size-6 text-black h-6 w-6" />
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
