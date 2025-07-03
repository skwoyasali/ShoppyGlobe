// ProductList.jsx

import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import { setSearchQuery } from "../redux/searchSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  // Custom hook to fetch products from API
  const { products, loading, error } = useFetchProducts();
   // Access the current search query from Redux store (converted to lowercase for case-insensitive comparison)
  const query = useSelector((state) => state.search.query.toLowerCase());

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  // Display loading state while products are being fetched
  if (loading) return <div className="p-4">Loading products...</div>;
  
  // Display error message if fetching fails
  if (error)
    return <div className="p-4 text-red-600">Error fetching products.</div>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
