import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden fixed top-0 left-0 w-full bg-primary shadow-md z-50 lg:flex justify-between items-center px-6 md:px-10 lg:px-20 py-4">
      <div className="flex space-x-4 md:space-x-6">
        <span className="text-white text-sm md:text-lg">
          Phone: +1 (555) 123-4567
        </span>
        <span className="text-white text-sm md:text-lg">
          Email: support@ONLYHXGS.com
        </span>
      </div>
      <Link href="#connect-with-us">
        <button className="relative bg-black text-white text-sm md:text-lg uppercase w-32 md:w-40 lg:w-48 h-auto p-2 overflow-hidden group">
          <span className="relative z-10">Connect with us</span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
