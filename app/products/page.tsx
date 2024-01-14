"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../Data";
const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? data
      : data.filter((item: any) => item.Category === selectedCategory);

  // Handle category selection change
  const handleCategoryChange = (e: any) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <>
      <section>
        <div className="flex flex-col flex-nowrap gap-[40px] h-min justify-start overflow-hidden py-0 px-[24px] sm:px-[40px] mt-[120px]">
          <div className="flex flex-col flex-start  flex-shrink-0">
            <header>
              <h2 className="text-xl font-bold sm:text-3xl">
                Product Collection
              </h2>

              <p className="mt-4 max-w-md dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                praesentium cumque iure dicta incidunt est ipsam, officia dolor
                fugit natus?
              </p>
            </header>
          </div>

          <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <div className="block sm:hidden">
            </div>

            <div className="sm:block">
              <label htmlFor="SortBy" className="sr-only">
                Sort By
              </label>
              <select
                id="SortBy"
                className="h-10 rounded border-gray-300 text-sm"
                onChange={handleCategoryChange}
              >
                <option value="All">All Categories</option>
                <option value="Knee Brace">Knee Brace</option>
                <option value="Wrist Brace">Wrist Brace</option>
                <option value="Elbow Sleeve">Elbow Sleeve</option>
                <option value="Ankle Brace">Ankle Brace</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
            {filteredItems.map((item, index) => (
              <Link
                className="group relative block"
                key={index}
                href={`/products/${item["S. No."]}`}
              >
                <div className="relative h-[350px] sm:h-[450px]">
                  <Image
                    src={item["Product Image 1"]}
                    alt="image here"
                    quality={100}
                    height={900}
                    width={700}
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <Image
                    src={item["Product Image 2"]}
                    alt="image here"
                    quality={100}
                    height={900}
                    width={700}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3
                    className="text-xl font-medium text-black"
                    style={{ fontWeight: "700" }}
                  >
                    {item["Product Name"].split(" ").slice(0, 3).join(" ")}
                    {}
                  </h3>

                  <p className="mt-1.5 max-w-[40ch] text-xs text-black">
                    {item["Product Description "]
                      .split(" ")
                      .slice(0, 25)
                      .join(" ")}{" "}
                    ...
                  </p>

                  <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
