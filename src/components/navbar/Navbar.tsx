"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Route {
  id: number;
  label: string;
  url: string;
}

const routes = [
  {
    id: 1,
    label: "Services",
    url: "#services",
  },
  {
    id: 2,
    label: "Statistics",
    url: "#statistics",
  },
  {
    id: 3,
    label: "Our Work",
    url: "#our-work",
  },
  {
    id: 4,
    label: "FAQ",
    url: "#faq",
  },
  {
    id: 5,
    label: "Contact Us",
    url: "#contact-us",
  },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 100) {
        setShowNavbar(true);
      } else if (currentY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <nav
      className={`hidden lg:flex w-full px-6 md:px-10 lg:px-20 py-4 justify-between items-center bg-black shadow-md z-50 transition-all duration-300 ${
        showNavbar ? "fixed top-0" : "absolute -top-24"
      }`}
    >
      <img src="/logo/bb-logo.png" alt="blue belvet logo" />
      <div className="flex space-x-4 md:space-x-6">
        {routes.map(route => (
          <Link
            key={route.id}
            className="text-white text-sm md:text-lg cursor-pointer"
            href={route.url}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <Link href="#connect-with-us">
        <button className="relative bg-black border border-white rounded-full text-white text-sm md:text-lg uppercase w-32 md:w-40 lg:w-48 h-auto p-2 overflow-hidden group">
          <span className="relative z-10">Apply now</span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
