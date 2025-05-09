"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import QuestionnaireModal from "../questionaireModal.tsx/QuestionaireModal";

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
  const [showModal, setShowModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 100) {
        setShowNavbar(true);
        setIsAtTop(true);
      } else if (currentY < lastScrollY) {
        setShowNavbar(true);
        setIsAtTop(false);
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
      className={`hidden xl:flex fixed w-full bg-black px-6 md:px-10 lg:px-20 py-4 justify-between items-center z-50 transition-all duration-300 bg-opacity-0 ${
        showNavbar ? "top-0 " : "-top-24"
      } ${isAtTop ? "bg-opacity-0" : " bg-opacity-100"}`}
    >
      <img src="/logo/bb-logo.png" alt="blue belvet logo" />
      <div className="flex w-full items-center justify-center space-x-4 md:space-x-16">
        {routes.map(route => (
          <Link
            key={route.id}
            className="text-white/60 text-sm md:text-lg cursor-pointer hover:text-white duration-300"
            href={route.url}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <Link href="#connect-with-us">
        <button
          onClick={() => setShowModal(true)}
          className="relative  border border-white rounded-full text-white text-sm md:text-lg uppercase w-32 md:w-40 lg:w-48 h-auto p-2 overflow-hidden group hover:bg-[#00AEEF] duration-300"
        >
          <span className="relative z-10">Apply now</span>
        </button>
      </Link>

      <QuestionnaireModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
};

export default Navbar;
