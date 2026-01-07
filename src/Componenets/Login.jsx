import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // stop refresh
    navigate("/");      // HOME PAGE
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">

        <div className="flex justify-center mb-4 text-blue-600 text-4xl">📶</div>

        <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
        <p className="text-gray-500 text-center text-sm mt-1">
          Login to manage your internet bill payments
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input type="email" className="w-full bg-gray-100 px-4 py-2 rounded-lg" placeholder="Email" required />
          <input type="password" className="w-full bg-gray-100 px-4 py-2 rounded-lg" placeholder="Password" required />

          <button className="w-full bg-black text-white py-2 rounded-lg">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </div>
    </div>
  );
}
