import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import { SiFlipkart, SiAmazon, SiFacebook, SiInstagram } from "react-icons/si";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
// import {
//   TwitterIcon,
//   GithubIcon,
//   DiscordIcon,
//   HeartFilledIcon,
//   SearchIcon,
// } from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
  const menuItems = [
    "Home",
    "Products",
    "About Us",
    "Contact Us",
    "Facebook",
    "Instagram",
  ];

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>
      <NavbarBrand className="justify-start mr-28 sm:z-10 sm:mb-[0.4rem] child h-full overflow-clip">
        <Image
          src={"/Logo.png"}
          alt="Logo"
          width={100}
          height={100}
          className={`dark text-foreground bg-background`}
        ></Image>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/products">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" color="foreground">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="tiny">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <SiInstagram />
        </NavbarItem>
        <NavbarItem>
          <SiFacebook />
        </NavbarItem>
        <NavbarItem>
          <SiAmazon />
        </NavbarItem>
        <NavbarItem>
          <SiFlipkart />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch className="hidden" />
        </NavbarItem>
        <NavbarItem className="">{<ThemeSwitch />}</NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                 href={
                    index === 0
                      ? "/"
                      : index === 2 || index === 3
                      ? `/${item.toLowerCase().replace(/\s/, "-")}`
                      : `/${item.toLowerCase()}`
                  }
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
