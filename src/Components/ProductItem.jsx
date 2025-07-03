// File: src/components/ProductItem.jsx
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import PropTypes from 'prop-types';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();// Hook to dispatch Redux actions

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2 rounded" />
        <h2 className="font-bold text-lg mb-1">{product.title}</h2>
        <p className="text-sm text-gray-700 mb-2">{product.description}</p>
        <p className="font-semibold text-green-600">₹{(product.price*85).toFixed(2)}</p>
      </Link>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 w-full bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white py-2 rounded cursor-pointer focus"
      >
        Add to Cart
      </button>
    </div>
  );
}

// Props Validation
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};