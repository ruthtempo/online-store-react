import React from "react";
import { createContext, useState } from "react";
import { Product } from "../pages/Category";

type Cart = {
  id: number;
  price: string;
  title: string;
  image: string;
  quantity: number;
};

export const CartContext = createContext<{
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (product: Product, amount: number) => void;
  removeFromCart: (product: Cart) => void;
} | null>(null);

export const CartContextProvider = (p: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  function addToCart(product: Product, amount: number) {
    let index = cart.findIndex((cartProd) => cartProd.id === product.id);

    if (index === -1) {
      const newCart = cart.concat({
        id: product.id,
        price: product.price,
        title: product.title,
        image: product.image,
        quantity: amount,
      });
      setCart(newCart);
    } else {
      const updatedCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          cartProduct.quantity += amount;
        }
        return cartProduct;
      });
      console.log("cart", updatedCart);

      setCart(updatedCart);
    }
  }

  function removeFromCart(product: Cart) {
    const newCart = cart.filter((cartElem) => cartElem.id !== product.id);
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
