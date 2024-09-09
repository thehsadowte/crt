// src/components/ProductList.tsx
"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import * as m from "@/paraglide/messages";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="object-cover"
          />
          <h2>{product.title}</h2>
          <p>{product.price} USD</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-slate-500"
          >
            {m.add_to_cart()}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
