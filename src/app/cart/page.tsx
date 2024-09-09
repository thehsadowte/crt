// src/app/cart/page.tsx
"use client"; // клієнтський компонент для роботи з хуками
import * as m from "@/paraglide/messages";

import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <div>{m.cart_empty()}</div>;
  }

  return (
    <div>
      <h1>{m.your_cart()}</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4"
          >
            <div>
              <h2>{item.title}</h2>
              <p>{item.price} USD</p>
              <p>
                {m.quantity()}: {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white py-1 px-3 rounded"
            >
              {m.remove()}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
