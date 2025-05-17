import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { FaHeart } from 'react-icons/fa';
import { FavoriteContext } from '../Context/FavoriteContext';

function Card({ img, title, desc, page, id, fullMovie }) {
    const { favorites, toggleFavorite } = useContext(FavoriteContext);

    if (!id || !fullMovie || !img || !title) return null;

    const isFav = favorites.some(item => item?.id === id);

    return (
        <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20">
            <div
                className="absolute top-3 right-3 cursor-pointer text-xl z-10"
                onClick={() => toggleFavorite(fullMovie)}
            >
                <FaHeart color={isFav ? 'red' : 'white'} />
            </div>
            <div className="relative overflow-hidden">
                <img
                    className="w-full h-64 object-cover rounded-t-2xl transform hover:scale-105 transition-transform duration-300"
                    src={img}
                    alt={title}
                    loading="lazy"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{desc}</p>
                <div className="flex items-center justify-center">
                    {page && (
                        <Link to={page}>
                            <Button
                                name="See More"
                                color="bg-gradient-to-r from-indigo-500 to-purple-600"
                                className="w-full py-2 text-base font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
