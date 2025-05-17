import Form from "../Components/Form";

function Register() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 flex items-center justify-center p-4">
            <div className="w-full max-w-md animate-fadeIn">
                <Form mode="register" />
            </div>
        </div>
    );
}

export default Register;