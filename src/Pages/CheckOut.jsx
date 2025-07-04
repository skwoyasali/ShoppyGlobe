// src/Components/Checkout.jsx
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../redux/cartSlice";


export default function Checkout() {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  
  // Calculate total price (assumes USD converted to INR with 1 USD = ₹85)
  const total = cartItems.reduce((sum, item) => sum + (item.price * 85) * item.quantity, 0);
  const dispatch =useDispatch();

  // State to manage form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // In real-world, send data to backend or Razorpay
    alert("✅ Order Placed Successfully!\n\n" + JSON.stringify({ ...form, total }, null, 2));
   // Clear cart after successful order
    dispatch(emptyCart());
    // Redirect to home
    navigate("/");
  };

  // If cart is empty, show message
  if (cartItems.length === 0) {
    return (
      <div className="p-6 max-w-2xl mx-auto text-center text-gray-600">
        Your cart is empty. Add some products to checkout.
      </div>
    );
  }
// Render checkout form
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🧾 Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Shipping Address</label>
          <textarea
            name="address"
            required
            rows="3"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        <div className="text-right font-bold text-xl">
          Total Payable: ₹{total.toFixed(2)}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
        >
          ✅ Place Order
        </button>
      </form>
    </div>
  );
}
