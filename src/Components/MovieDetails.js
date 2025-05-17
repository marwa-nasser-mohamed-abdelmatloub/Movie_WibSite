import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=29cf44b93ca83bf48d9356395476f7ad`)
            .then((res) => {
                setMovie(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-400"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto animate-fadeIn">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-white/20">
                    <img
                        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-96 object-cover rounded-t-xl"
                    />
                    <div className="p-8">
                        <h1 className="text-3xl font-extrabold text-white mb-4">{movie.title}</h1>
                        <div className="flex items-center mb-6">
                            <span className="bg-indigo-500/30 text-white text-sm font-semibold px-3 py-1 rounded-full mr-4">
                                {movie.vote_average}/10
                            </span>
                            <span className="text-gray-300">{movie.release_date}</span>
                            <span className="mx-4 text-gray-400">•</span>
                            <span className="text-gray-300">{movie.runtime} mins</span>
                        </div>
                        <p className="text-gray-200 mb-8 leading-relaxed">{movie.overview}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Genres</h3>
                                <div className="flex flex-wrap gap-2">
                                    {movie.genres?.map(genre => (
                                        <span
                                            key={genre.id}
                                            className="bg-indigo-500/30 text-white px-3 py-1 rounded-full text-sm hover:bg-indigo-500/50 transition-colors"
                                        >
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Production Companies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {movie.production_companies?.map(company => (
                                        <span
                                            key={company.id}
                                            className="bg-indigo-500/30 text-white px-3 py-1 rounded-full text-sm hover:bg-indigo-500/50 transition-colors"
                                        >
                                            {company.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;