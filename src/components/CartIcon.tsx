// src/components/CartIcon.tsx
"use client";

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartIcon = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <FaShoppingCart size={24} className="text-blue-500">
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
            {itemCount}
          </span>
        )}
      </FaShoppingCart>
    </div>
  );
};

export default CartIcon;
