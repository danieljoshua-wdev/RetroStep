import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + (item.salePrice ?? item.price) * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={`${item.id}-${item.selectedSize}-${index}`}
                className="flex items-center gap-4 p-4 bg-white shadow rounded"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Size: {item.selectedSize ?? "N/A"}
                  </p>
                  <p className="text-sm text-gray-500">
                    ${(item.salePrice ?? item.price).toLocaleString()}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="px-2 py-1 border rounded"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.quantity + 1
                        )
                      }
                      className="px-2 py-1 border rounded"
                    >
                      ＋
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.selectedSize)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <div className="font-bold text-lg">
              Total: ${total.toLocaleString()}
            </div>
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
