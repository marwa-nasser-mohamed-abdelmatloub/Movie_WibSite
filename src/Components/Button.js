import React from "react";

const Button = ({ name, color, disabled }) => {
    return (
        <button
            type="submit"
            disabled={disabled}
            className={`${color} text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group`}
        >
            <span className="relative z-10">{name}</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
    );
};

export default Button;