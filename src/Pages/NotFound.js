import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NotFound() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 flex items-center justify-center p-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 animate-fadeIn text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-200 mb-6">Sorry, the page you're looking for doesn't exist.</p>
                    <Link
                        to="/"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
}
export default NotFound;