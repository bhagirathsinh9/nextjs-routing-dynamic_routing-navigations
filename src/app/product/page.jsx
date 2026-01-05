"use client";

import { products } from "@/data/products";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function ProductPage() {
  const router = useRouter();
  return (
    <div className="w-[30%] mx-auto my-3 mb-3">
      <h1 className="text-2xl font-bold mb-5">Product Listing</h1>
      <button className="cursor-pointer hover:underline flex justify-center items-center gap-2" onClick={() => router.back()}><IoMdArrowRoundBack  className="text-white"/> Go Back</button>
      {products.map((item) => {
        return (
          <div key={item.id} className="mb-5">
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <Link
              href={`/product/${item.id}`}
              className="block mt-3 text-center bg-blue-600 text-white py-2 rounded"
            >
              View Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
