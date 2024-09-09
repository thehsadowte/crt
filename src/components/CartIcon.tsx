"use client";

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartIcon = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <svg
        className="stroke-white cursor-pointer"
        width={37}
        height={32}
        viewBox="0 0 37 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.1661 10.231H3.8339C3.41731 10.2226 3.00415 10.3078 2.62503 10.4801C2.24593 10.6525 1.91056 10.9077 1.64381 11.2268C1.37705 11.5459 1.18573 11.9208 1.08402 12.3236C0.982309 12.7265 0.972815 13.1469 1.05624 13.5539L4.11167 28.7839C4.24155 29.4186 4.59062 29.9882 5.09816 30.3927C5.60567 30.7976 6.23954 31.0122 6.88935 30.9991H30.1107C30.7607 31.0122 31.3945 30.7976 31.902 30.3927C32.4095 29.9882 32.7587 29.4186 32.8884 28.7839L35.9438 13.5539C36.0271 13.1469 36.0177 12.7265 35.916 12.3236C35.8144 11.9208 35.623 11.5459 35.3563 11.2268C35.0894 10.9077 34.7541 10.6525 34.375 10.4801C33.9958 10.3078 33.5828 10.2226 33.1661 10.231Z"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.333 1L30.1663 10.2308"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.83301 10.2308L12.6663 1"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {itemCount > 0 && (
        <span className="absolute z-10 top-2 right-[7px] text-white text-xs font-bold rounded-full px-2 py-1">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
