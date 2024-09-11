import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary shadow-md z-50 flex justify-between items-center px-[84px] py-2">
      <div className="flex space-x-6">
        <span className="text-white text-lg">Phone: +1 (555) 123-4567</span>
        <span className="text-white text-lg">Email: support@onlyhugs.com</span>
      </div>
      <Link href="#connect-with-us">
        <button className="relative bg-black text-white text-lg uppercase w-48 h-auto p-2 overflow-hidden group">
          <span className="relative z-10">Connect with us</span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
