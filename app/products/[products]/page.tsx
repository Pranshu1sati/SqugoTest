"use client";
import React, { useState, useEffect } from "react";
import { data } from "../../../Data";
import { ProductInfo } from "./productInfo";

import { ProductGallery } from "../productImages"; // Update the path accordingly

interface Props {
  params: {
    products: string;
  };
}

const ProductPage = ({ params }: Props) => {
  const [productImages, setProductImages] = useState<string[]>([]);
  const [productData, setProductData] = useState<any>(null);
  console.log(params);

  useEffect(() => {
    // Find the product whose 'S. No.' matches the slug
    const product = data.find((item) => item["S. No."] === params.products);
    if (product) {
      // Extract all image URLs into an array
      setProductImages([
        product["Product Image 1"],
        product["Product Image 2"],
        product["Product Image 3"],
        product["Product Image 4"],
        product["Product Image 5"],
      ]);
      // Remove any undefined or empty strings
      setProductData(product);
    }
  }, [params.products]);

  return (
    <section className="flex flex-col  h-screen">
      <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product Section */}
          <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
            {/* Pass the images array as props to ProductGallery */}
            {productImages.length > 0 && (
              <ProductGallery productImg={{ images: productImages }} />
            )}
            {productData && <ProductInfo productInfo={productData} />}
            {/* ... Other components ... */}
          </div>
        </div>
      </main>
    </section>
  );
};

export default ProductPage;
