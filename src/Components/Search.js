import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';

function Search() {
    const [query, setQuery] = useState('');
    const history = useHistory();

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (query.trim()) {
                history.push(`/search?q=${encodeURIComponent(query)}`);
            } else {
                history.push('/movies');
            }
        }, 500);

        return () => clearTimeout(debounceTimer); 
    }, [query, history]);

    const handleClear = () => {
        setQuery('');
        history.push('/movies');
    };

    return (
        <div className="relative mx-4">
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies..."
                    className="w-40 md:w-64 px-4 py-2 bg-white/5 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 pl-10 pr-10"
                />
                <button
                    type="button"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-400 transition-colors"
                >
                    <FaSearch />
                </button>
                {query && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                        <FaTimes />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Search;