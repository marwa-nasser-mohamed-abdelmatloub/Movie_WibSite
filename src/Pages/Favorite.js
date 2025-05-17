import { useContext } from 'react';
import Card from '../Components/Card';
import { FaHeart } from 'react-icons/fa';
import { FavoriteContext } from '../Context/FavoriteContext';

const Favorite = () => {
    const { favorites } = useContext(FavoriteContext);

    return (
        <div className="bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen p-8">
            <h1 className="text-white text-3xl font-bold mb-4 flex items-center">
                Favorites
                <FaHeart className="text-red-500 ml-2" />
                {favorites.length > 0 && (
                    <span className="text-white ml-2 bg-purple-700 px-2 py-1 rounded-full text-sm">
                        {favorites.length}
                    </span>
                )}
            </h1>
            <p className="text-gray-300 mb-6">Your favorite movies</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.length === 0 ? (
                    <p className="text-white text-xl">No favorites added yet.</p>
                ) : (
                    favorites.map(movie => (
                        <Card
                            key={movie.id}
                            id={movie.id}
                            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            title={movie.title}
                            desc={movie.overview}
                            fullMovie={movie}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Favorite;
