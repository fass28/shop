import { CalendarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex  items-center  border border-black w-80 p-4 rounded-lg mb-4">
      <div className="flex  justify-between items-center w-full">
        <p className="flex flex-col items-center ">
          <span className="font-light flex  items-center gap-2 ">
            <CalendarIcon className="w-4 h-4 left-0" />
            01.02.23
          </span>
          <span className="font-light flex  items-center gap-2 ">
            <ShoppingBagIcon className="w-4 h-4 left-0" />
            {totalProducts} articles
          </span>
        </p>

        <span className="font=-medium text-2xl">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrdersCard;
