
import { Link } from 'react-router-dom';
// This component is displayed for undefined routes (404 error)
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;