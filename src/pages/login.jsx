import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Verification code sent to ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">

        <div className="flex justify-center mb-6">
          <div className="flex justify-center mb-6">
<h1 className="text-3xl font-bold font-raleway tracking-wide">RetroStep</h1>

</div>

        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">Sign in</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your email and we'll send you a verification code
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
          >
            Continue
          </button>
        </form>

        <div className="flex justify-between text-xs text-gray-500 mt-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
