// src/app/page.tsx (Серверний компонент)
import CartIcon from "@/components/CartIcon";
import ProductList from "../components/ProductList"; // Імпортуємо клієнтський компонент для відображення продуктів

import * as m from "@/paraglide/messages.js";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const HomePage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return (
    <div>
      <h1>{m.product_list()}</h1>
      {/* Передаємо продукти до клієнтського компонента */}
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
