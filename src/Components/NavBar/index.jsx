import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light ">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/beauty"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Beauty
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fragrances"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Fragrances
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/groceries"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Groceries
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">fass@platzi.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {" "}
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sing In
          </NavLink>
        </li>
        <li className="flex justify-center items-center">
          <ShoppingCartIcon className="size-5" />
          <div className="pl-2">{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
