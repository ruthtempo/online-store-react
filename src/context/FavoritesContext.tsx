import React from "react";
import { createContext, useState } from "react";
import { Product } from "../pages/Category";
import { useUser } from "./UserContext";

export const FavoritesContext = createContext<{
  favorites: Product[];
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>;
  toggleFavorites: (product: Product) => void;
} | null>(null);

export const FavoritesContextProvider = (p: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const { user } = useUser();

  const toggleFavorites = (product: Product) => {
    const isFavorite = favorites.some((p) => p.id === product.id);
    if (isFavorite) {
      const removedFav = favorites.filter((p) => p.id !== product.id);
      setFavorites(removedFav);
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...user, favoriteItems: removedFav })
      );
    } else {
      const addedFav = favorites.concat(product);
      setFavorites(addedFav);

      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...user, favoriteItems: addedFav })
      );
    }
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, toggleFavorites }}
    >
      {p.children}
    </FavoritesContext.Provider>
  );
};

function useFavorites() {
  const context = React.useContext(FavoritesContext);
  if (context === null) {
    throw new Error("useFavorites must be used within a UserProvider");
  }
  return context;
}

export { useFavorites };
