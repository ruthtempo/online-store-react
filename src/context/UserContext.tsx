import React, { createContext, useEffect, useState } from "react";
import { Product } from "../pages/Category";

export type Anonymous = {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  favorites?: Product[];
  cart: Cart[];
};

export type User = Required<Anonymous>;

export type Cart = {
  id: number;
  price: string;
  title: string;
  image: string;
  quantity: number;
};

export const UserContext = createContext<{
  user: Anonymous;
  setUser: React.Dispatch<React.SetStateAction<Anonymous>>;
  toggleFavorites: (product: Product) => void;
  addToCart: (product: Product, amount: number) => void;
  removeFromCart: (product: Cart) => void;
} | null>(null);

export const isLoggedIn = (x: Anonymous): x is User => x.id !== undefined;

export const UserContextProvider = (p: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Anonymous>({ cart: [] });

  function maybeSyncUserState() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const userObject: User = JSON.parse(currentUser);
      setUser(userObject);
    }
  }

  useEffect(() => {
    maybeSyncUserState();
  }, []);

  /// cart subcontext

  function addToCart(product: Product, amount: number) {
    if (isLoggedIn(user)) {
      let index = user.cart.findIndex((cartProd) => cartProd.id === product.id);

      const updatedUser: User = {
        ...user,
        cart:
          index === -1
            ? user.cart.concat({
                id: product.id,
                price: product.price,
                title: product.title,
                image: product.image,
                quantity: amount,
              })
            : user.cart.map((cartProduct) => ({
                ...cartProduct,
                quantity:
                  cartProduct.id === product.id
                    ? cartProduct.quantity + amount
                    : cartProduct.quantity,
              })),
      };

      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      setUser(updatedUser);
    }
  }

  function removeFromCart(product: Cart) {
    if (user) {
      const newCart = user.cart.filter(
        (cartElem) => cartElem.id !== product.id
      );

      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...user, cart: newCart })
      );

      setUser({ ...user, cart: newCart });
    }
  }

  ////favs subcontext

  const toggleFavorites = (product: Product) => {
    if (isLoggedIn(user)) {
      const isFavorite = user.favorites.some((p) => p.id === product.id);

      const updatedUser: User = {
        ...user,
        favorites: isFavorite
          ? user.favorites.filter((p) => p.id !== product.id) // remove
          : user.favorites.concat(product), // add
      };

      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        toggleFavorites,
        addToCart,
        removeFromCart,
      }}
    >
      {p.children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { useUser };
