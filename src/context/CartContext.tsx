import React from "react";
import { createContext, useState } from "react";
import { Product } from "../pages/Category";

type Cart = {
  product: Product;
  productPrice: string;
  productAmount: number;
  costSum: number;
};

export const CartContext = createContext<{
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (product: Product, amount: number) => void;
  removeFromCart: (product: Product) => void;
} | null>(null);

export const CartContextProvider = (p: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  function addToCart(product: Product, amount: number) {
    const sum = amount * parseInt(product.price);
    const newCart = cart.concat({
      product,
      productPrice: product.price,
      productAmount: amount,
      costSum: sum,
    });
    setCart(newCart);
  }

  function removeFromCart(product: Product) {
    const newCart = cart.filter(
      (cartElem) => cartElem.product.id !== product.id
    );
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
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
