import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center max-w-full min-h-screen">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Our Website
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          Discover our range of products and services. We are here to provide
          the best solutions for you.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 w-40 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 flex items-center justify-center mx-auto"
        >
          Shop Now
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Home;
