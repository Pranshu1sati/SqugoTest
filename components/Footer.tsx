"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const path = usePathname();
  // console.log(path);
  return (
    <footer
      className={`border-t ${
        path.includes("/products/") ? "mt-[32rem] sm:mt-72" : "mt-12"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {siteConfig.footer.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href}>
                <p className="text-sm leading-6">{item.name}</p>
              </Link>
            </div>
          ))}
        </nav>
        <Link href="https://www.fullstack.so">
          <p className="mt-10 block text-center text-xs leading-5">
            &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
            reserved.
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
