import { useEffect, useState } from 'react';

const useFavorites = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const toggleFavorite = (blogId) => {
        const updatedFavorites = favorites.includes(blogId)
            ? favorites.filter(id => id !== blogId)
            : [...favorites, blogId];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return [favorites, toggleFavorite];
};

export default useFavorites;





