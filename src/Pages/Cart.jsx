// src/Components/Cart.jsx
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
   // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
 // Calculate total price in INR (assuming 1 USD = ₹85)
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * 85 * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 border border-dashed p-8 rounded">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">
                    ₹{(item.price * 85).toFixed(2)} × {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:flex-row gap-4">
                <p className="font-bold text-green-600">
                  ₹{(item.price * 85 * item.quantity).toFixed(2)}
                </p>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-end text-xl font-bold">
            Total: ₹{total.toFixed(2)}
          </div>
          <div className="mt-6 flex justify-end">
            <Link to="/checkout">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
