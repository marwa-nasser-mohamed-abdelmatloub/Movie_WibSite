import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Redux/Actions/MovieAct';
import Card from './Card';

function MovieList() {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64 bg-gradient-to-b from-purple-900 to-purple-700">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-400"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen p-8">
                <p className="text-red-400 text-center text-xl">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((movie, index) => (
                    <div
                        key={movie.id}
                        className="animate-fade-in"
                        style={{ animationDelay: `${Math.min(index * 100, 1000)}ms` }}
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
        </div>
    );
}

export default MovieList;