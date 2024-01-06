"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const links = [
  { name: "All", href: "/" },
  { name: "Men", href: "/categories/men's clothing" },
  { name: "Women", href: "/categories/women's clothing" },
  { name: "Jewelery", href: "/categories/jewelery" },
  { name: "Electronics", href: "/categories/electronics" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6">
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">
            Egypt<span className="text-primary">Zone</span>
          </h1>
        </Link>
        <nav className="hidden lg:flex gap-12 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex">
          <Button className="flex flex-col rounded-none h-12 md:h-16 gap-y-1.5 w-16">
            <ShoppingBag />
            <span className="hidden md:block">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
