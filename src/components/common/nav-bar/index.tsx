"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-xl font-bold text-white">
          로고
        </Link>
        <div className="space-x-4">
          <NavLink href="/" currentPath={pathname}>
            홈
          </NavLink>
          <NavLink href="/observer" currentPath={pathname}>
            Observer
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
