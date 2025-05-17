import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import Title from './Title';
import { Link } from 'react-router-dom';

function SearchResults() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    useEffect(() => {
        if (query) {
            setLoading(true);
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=29cf44b93ca83bf48d9356395476f7ad&query=${encodeURIComponent(query)}`)
                .then((response) => {
                    setResults(response.data.results);
                    setLoading(false);
                })
                .catch((error) => {
                    setError('Failed to fetch results');
                    setLoading(false);
                });
        } else {
            setResults([]);
        }
    }, [query]);

    if (!query) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 animate-fadeIn text-center">
                    <h2 className="text-2xl font-extrabold text-white mb-4">No Search Query</h2>
                    <p className="text-gray-200 mb-6">Please enter a movie title to search.</p>
                    <Link
                        to="/movies"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Browse Movies
                    </Link>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
                <div className="container mx-auto px-4 py-12">
                    <Title title={`Searching for "${query}"`} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 animate-pulse"
                            >
                                <div className="w-full h-64 bg-gray-500/20 rounded-t-2xl"></div>
                                <div className="p-6 space-y-4">
                                    <div className="h-6 bg-gray-500/20 rounded"></div>
                                    <div className="h-4 bg-gray-500/20 rounded"></div>
                                    <div className="h-4 bg-gray-500/20 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 animate-fadeIn text-center">
                    <h2 className="text-2xl font-extrabold text-white mb-4">Oops!</h2>
                    <p className="text-gray-200 mb-6">{error}</p>
                    <Link
                        to="/movies"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Back to Movies
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
            <div className="container mx-auto px-4 py-12 animate-fadeIn">
                <Title title={`Search Results for "${query}"`} />
                {results.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {results.map((movie, index) => (
                            <div
                                key={movie.id}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Card
                                    id={movie.id}
                                    img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    title={movie.title}
                                    desc={movie.overview.substring(0, 100) + "..."}
                                    page={`/movie/${movie.id}`}
                                    fullMovie={movie}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 animate-fadeIn text-center">
                        <h2 className="text-2xl font-extrabold text-white mb-4">No Results Found</h2>
                        <p className="text-gray-200 mb-6">Try searching for another movie.</p>
                        <Link
                            to="/movies"
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Back to Movies
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchResults;