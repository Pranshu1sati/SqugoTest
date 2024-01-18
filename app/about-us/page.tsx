import React from "react";
import { title } from "@/components/primitives";

const AboutUsPag = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-6">About Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <img
          src="./2.JPG"
          alt="About Us Image"
          id="image"
          className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
        />
        <p className="text-lg md:w-1/2">
          At Squgo your fitness and well-being are our top priority. We
          specialize in providing premium gym gear, including high-quality knee
          braces, ankle braces, and elbow braces, designed to support your
          active lifestyle. Our products are meticulously crafted with the dual
          goal of preventing injuries and enhancing your workout experience. We
          understand the importance of reliable and effective gear in your
          fitness journey, which is why we are committed to offering products
          that not only safeguard your joints but also boost your performance.
          At Squgo, we are more than just a brand; we are a community of fitness
          enthusiasts who care deeply about our customers' health and success.
          Trust us to be your partner in pursuing a stronger, safer, and more
          empowered you.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPag;
