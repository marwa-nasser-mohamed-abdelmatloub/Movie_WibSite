import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (movie) => {
        setFavorites((prev) =>
            prev.some((item) => item.id === movie.id)
                ? prev.filter((item) => item.id !== movie.id)
                : [...prev, movie]
        );
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};
