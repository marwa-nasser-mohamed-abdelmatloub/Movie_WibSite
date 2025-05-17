import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 flex flex-col items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 animate-fadeIn max-w-lg w-full text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                    Welcome to MovieApp
                </h1>
                <p className="text-lg text-gray-200 mb-8">
                    Discover your favorite movies and enjoy the best cinematic experience
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/movie"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform animate-pulse"
                    >
                        Browse Movies
                    </Link>
                    <Link
                        to="/login"
                        className="bg-white/20 border border-white/30 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;