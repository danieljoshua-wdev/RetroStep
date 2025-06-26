import React from "react";
import { Link } from "react-router-dom";

function OrderConfirmation() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-700">🎉 Thank you for your purchase!</h1>
      <p className="text-gray-700 mb-6">Your order has been placed successfully.</p>
      <Link
        to="/"
        className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default OrderConfirmation;
