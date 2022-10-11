import React from "react";
import { createContext, useState } from "react";
import { Product } from "../pages/Category";

export const CartContext = createContext<{
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
} | null>(null);

export const CartContextProvider = (p: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    const newCart = cart.concat(product);
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {p.children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = React.useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a UserProvider");
  }
  return context;
}

export { useCart };
