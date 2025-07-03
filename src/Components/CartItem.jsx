// File: src/components/CartItem.jsx
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
// This component represents a single cart item
export default function CartItem({ item }) {
  const dispatch = useDispatch(); // Get Redux dispatch function

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-sm text-gray-600">${item.price}</p>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}
