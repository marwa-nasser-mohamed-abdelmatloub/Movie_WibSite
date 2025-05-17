import MovieList from "../Components/MovieList";
import Title from "../Components/Title";

function Movie() {
    return (
        <div className="bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen">
            <div className=" py-12 text-center border-b border-white/20 animate-fadeIn">
                <Title title="Popular Movies" />
                <p className="text-gray-200 text-lg mt-2">Discover the latest trending movies</p>
            </div>
            <div className="container mx-auto px-4 py-8">
                <MovieList />
            </div>
        </div>
    );
}

export default Movie;