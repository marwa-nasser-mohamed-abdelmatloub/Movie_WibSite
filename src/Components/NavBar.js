import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { FaHeart } from 'react-icons/fa';
import { FavoriteContext } from '../Context/FavoriteContext';

function NavBar() {
    const { favorites } = useContext(FavoriteContext);

    return (
        <nav className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 border-b border-white/20 animate-fadeIn">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-2xl font-extrabold text-dark bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 hover:text-indigo-300 transition-colors"
                    >
                        MovieApp
                    </Link>
                    <div className="flex space-x-8">
                        <Search />
                        <Link
                            to="/"
                            className="text-gray-200 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Home
                        </Link>
                        <Link
                            to="/movie"
                            className="text-gray-200 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Movies
                        </Link>
                        <Link
                            to="/favorites"
                            className="flex items-center text-gray-200 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            <span className="mr-1">Favorites</span>
                            <FaHeart className="text-red-500 mr-1" />
                            {favorites.length > 0 && (
                                <span className="bg-purple-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                                    {favorites.length}
                                </span>
                            )}
                        </Link>
                        <Link
                            to="/login"
                            className="text-gray-200 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="text-gray-200 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
