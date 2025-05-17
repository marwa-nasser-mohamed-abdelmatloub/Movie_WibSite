import { useHistory } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function Form({ props }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errName, setErrName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errUsername, setErrUsername] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errConfirmPassword, setErrConfirmPassword] = useState("");

    const history = useHistory();
    const [success, setSuccess] = useState(false);
    const isLogin = props === "login";

    const hasErrors = isLogin
        ? errEmail || errPassword || !email || !password
        : errEmail || errName || errUsername || errPassword || errConfirmPassword ||
        !email || !name || !username || !password || !confirmPassword;

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        switch (id) {
            case "name":
                setName(value);
                setErrName(
                    !value.trim() === "" ? "Name is required" :
                        value.length < 3 ? "Name must be at least 3 characters" : ""
                );
                break;
            case "email":
                setEmail(value);
                setErrEmail(
                    value.trim() === "" ? "Email is required" :
                        !/^\S+@\S+\.\S+$/.test(value) ? "Invalid email format" : ""
                );
                break;
            case "username":
                setUsername(value);
                setErrUsername(
                    !value.trim() ? "Username is required" :
                        /\s/.test(value) ? "Username must not contain spaces" : ""
                );
                break;
            case "password":
                setPassword(value);
                const trimmedPassword = value.trim();
                setErrPassword(
                    trimmedPassword === "" ? "Password is required" :
                        trimmedPassword.length < 6 ? "Password must be at least 6 characters" :
                            /\s/.test(trimmedPassword) ? "Password must not contain spaces" :
                                ""
                );
                break;                
            case "confirm-password":
                setConfirmPassword(value);
                setErrConfirmPassword(
                    value.trim() === "" ? "Please confirm your password" :
                        value !== password ? "Passwords do not match" :
                            /\s/.test(value) ? "Password must not contain spaces" :
                                ""
                );
                break;                
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => history.push("/"), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 flex items-center justify-center p-4">
            <div className="w-full max-w-md animate-fadeIn">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-extrabold text-white tracking-tight">
                            {isLogin ? "Welcome Back" : "Join the Future"}
                        </h2>
                        <p className="text-gray-300 mt-2">
                            {isLogin ? "Sign in to your account" : "Create your account today"}
                        </p>
                    </div>

                    {success && (
                        <div className="mb-6 bg-green-500/20 border-l-4 border-green-400 text-green-200 p-4 rounded-lg animate-pulse">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Success! Redirecting...</span>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                                Email
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                            {errEmail && <p className="text-red-400 text-xs mt-1">{errEmail}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your password"
                                />
                            </div>
                            {errPassword && <p className="text-red-400 text-xs mt-1">{errPassword}</p>}
                        </div>

                        {!isLogin && (
                            <>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                                        Name
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    {errName && <p className="text-red-400 text-xs mt-1">{errName}</p>}
                                </div>

                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-200">
                                        Username
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            id="username"
                                            type="text"
                                            value={username}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                                            placeholder="Choose a username"
                                        />
                                    </div>
                                    {errUsername && <p className="text-red-400 text-xs mt-1">{errUsername}</p>}
                                </div>

                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-200">
                                        Confirm Password
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            id="confirm-password"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                                            placeholder="Confirm your password"
                                        />
                                    </div>
                                    {errConfirmPassword && <p className="text-red-400 text-xs mt-1">{errConfirmPassword}</p>}
                                </div>
                            </>
                        )}

                        <div className="flex items-center justify-center">
                            <Button
                                disabled={hasErrors}
                                name={isLogin ? "Login" : "Register"}
                                color="bg-gradient-to-r from-indigo-500 to-purple-600"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;