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
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61553578032530",
    },
    { name: "Instagram", href: "https://www.instagram.com/squgo_india/" },
    {
      name: "Amazon",
      href: "https://www.amazon.in/stores/Squgo/page/3455AF0E-74DD-4F4E-A919-EE8E9489368F?ref_=ast_bln",
    },
    {
      name: "Flipkart",
      href: "https://www.flipkart.com/search?q=Squgo&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off",
    },
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
          <Link color="foreground" href="/contact" className="tiny">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <Link href="https://www.instagram.com/squgo_india/" color="danger">
          <NavbarItem>
            <SiInstagram />
          </NavbarItem>
        </Link>
        <Link
          color="primary"
          href="https://www.facebook.com/profile.php?id=61553578032530"
        >
          <NavbarItem>
            <SiFacebook />
          </NavbarItem>
        </Link>
        <Link
          color="foreground"
          href="ttps://www.amazon.in/stores/Squgo/page/3455AF0E-74DD-4F4E-A919-EE8E9489368F?ref_=ast_bln"
        >
          <NavbarItem>
            <SiAmazon />
          </NavbarItem>
        </Link>
        <Link
          color="foreground"
          href="https://www.flipkart.com/search?q=Squgo&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"
        >
          <NavbarItem>
            <SiFlipkart />
          </NavbarItem>
        </Link>

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
                    index === 4
                      ? "primary"
                      : index === menuItems.length - 3
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                  href={item.href}
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
