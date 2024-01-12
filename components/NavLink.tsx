"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface LinkInterface {
  name: string;
  href: string;
}

export default function NavLink({ href, name }: LinkInterface) {
  const pathname = usePathname();
  return (
    <li>
      {decodeURI(pathname) === href ? (
        <Link href={href} className="active">
          {name}
        </Link>
      ) : (
        <Link href={href}>{name}</Link>
      )}
    </li>
  );
}
