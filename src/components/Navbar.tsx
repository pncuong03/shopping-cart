import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Drawer, Space } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Navbar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [open, setOpen] = useState(false);

  const cartItems = useSelector((state: any) => state.cartReducer.cart);

  const getCount = () => {
    let count = 0;
    cartItems.forEach((item: any) => (count += item.qty || 0));
    return count;
  };

  const cartCount = getCount();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="relative h-[80px]">
      <div className="h-full max-w-7xl mx-auto flex justify-between items-center py-2 px-3 bg-white shadow-md rounded-md">
        <Link to="/" className="font-bold text-2xl px-3 md:px-0">
          Shopping App
        </Link>
        <nav
          className={`${
            mobileNavActive ? "flex" : "hidden"
          } transition-transform duration-300 ease-in-out transform md:flex absolute md:static left-0 top-14 md:top-0 items-center w-full md:w-auto justify-center bg-[#bcc7c9] text-white md:text-black md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center gap-5 p-5 md:p-0">
            <li className="font-bold text-2xl px-3 md:px-0">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold text-2xl px-3 md:px-0">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="font-bold text-2xl px-3 md:px-0 flex flex-1 items-center justify-center">
              <Space>
                <Badge count={cartCount} overflowCount={10}>
                  <button onClick={showDrawer}>
                    <ShoppingCartOutlined style={{ fontSize: 30 }} />
                  </button>
                </Badge>
              </Space>
            </li>

            <Drawer title="Cart" onClose={onClose} open={open}>
              <Cart />
            </Drawer>
          </ul>
        </nav>
        <div
          onClick={() => setMobileNavActive((prev) => !prev)}
          className="px-3 block md:hidden mt-1 cursor-pointer"
        >
          <span
            className={`bar block w-[30px] h-[4px] bg-black transition-transform duration-300 ease-in-out transform ${
              mobileNavActive ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`bar block w-[30px] mt-1 h-[4px] bg-black transition-opacity duration-300 ease-in-out ${
              mobileNavActive ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bar block w-[30px] mt-1 h-[4px] bg-black transition-transform duration-300 ease-in-out transform ${
              mobileNavActive ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
