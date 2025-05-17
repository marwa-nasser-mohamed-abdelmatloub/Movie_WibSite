import React from 'react';

function Title({ title }) {
    return (
        <h1 className="text-4xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 mb-6 text-center animate-fadeIn">
            {title}
        </h1>
    );
}

export default Title;