import Link from "next/link";

const NavLink = ({
  href,
  children,
  currentPath,
}: {
  href: string;
  children: React.ReactNode;
  currentPath: string;
}) => {
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-white" : "text-gray-300 hover:text-white"
      } transition-colors duration-200`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
