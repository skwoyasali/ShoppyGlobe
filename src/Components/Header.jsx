// src/Components/Header.jsx
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  // Get the number of items in the cart from Redux state
  const cartCount = useSelector((state)=>state.cart.items.length);
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">ShoppyGlobe</Link>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/cart" className="hover:text-yellow-400">Cart 🛒{cartCount}</Link>
      </nav>
    </header>
  );
}
