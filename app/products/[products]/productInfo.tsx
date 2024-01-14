"use client";

import { Key, useState } from "react";
import Link from "next/link";
import { SiAmazon, SiFlipkart } from "react-icons/si";
// import { ArrowRight, Currency } from "lucide-react";
// import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

// import { SanityProduct } from "@/config/inventory"
// import { getSizeName } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { useToast } from "@/components/ui/use-toast"

export function ProductInfo({ productInfo }: any) {
  console.log(productInfo);
  const [selectedSize, setSize] = useState(productInfo["Product Size"][0]);

  const sizes: string[] = productInfo.sizes;
  console.log(sizes ? "true" : "false");

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">
        {productInfo["Product Name"]}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">
          {productInfo["Bullet Point 1"]}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">
          {productInfo["Product Description "]}
        </div>
      </div>

      <div className="mt-4">
        <p>
          Size: <strong>{selectedSize}</strong>
        </p>
        {productInfo["Product Size"].map((size: string, index: Key) => (
          <button
            onClick={() => setSize(size)}
            key={index}
            className="mr-2 mt-4 border-1 border-purple-100 shadow-md px-2 py-4"
            // Update the button style and function as per your needs
          >
            {size}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-row gap-6">
        <button
          type="button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "6px",
          }}
          className="border-1 border-gray-500 hover:bg-[#ff9900] hover:text-white"
        >
          <p className="mr-[20px]">Buy on Amazon</p> <SiAmazon fill="#232f3e" />
        </button>
        <button
          className="border-1 border-gray-500 hover:bg-yellow-400 hover:text-white"
          type="button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "6px",
          }}
        >
          <p className="mr-[20px]">Buy on Flipkart </p>
          <SiFlipkart fill="#2a55e5" className="text-white" />
        </button>
      </div>
    </div>
  );
}
