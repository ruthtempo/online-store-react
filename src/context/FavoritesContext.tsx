import React from "react";
import { createContext, useState } from "react";
import { Product } from "../pages/Category";

export const FavoritesContext = createContext<{
  favorites: Product[];
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>;
  toggleFavorites: (product: Product) => void;
} | null>(null);

export const FavoritesContextProvider = (p: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const toggleFavorites = (product: Product) => {
    const isFavorite = favorites.some((p) => p.id === product.id);
    if (isFavorite) {
      const updatedFavArr = favorites.filter((p) => p.id !== product.id);
      setFavorites(updatedFavArr);
    } else {
      const newFavArr = favorites.concat(product);
      setFavorites(newFavArr);
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
