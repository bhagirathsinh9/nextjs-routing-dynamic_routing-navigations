import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="m-2">
      <h1>Home Page</h1>
      <h2>Click This Given Below button to view Product List</h2>
      <button>
        <Link
          href={`/product`}
          className="block mt-3 text-center bg-blue-600 text-white py-2 rounded"
        >
          View Details
        </Link>
      </button>
    </div>
  );
}
