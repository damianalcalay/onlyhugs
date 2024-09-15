import React from "react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 min-w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#capabilities" className="hover:underline">
                Capabilities
              </a>
            </li>
            <li>
              <a href="#our-impact" className="hover:underline">
                Our Impact
              </a>
            </li>
            <li>
              <a href="#connect-with-us" className="hover:underline">
                Connect with Us
              </a>
            </li>
          </ul>
        </div>

        {/* Segunda columna: Enlaces legales */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Tercera columna: Información de contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>Email: support@ONLYHXGS.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-8 text-center px-4">
        <p>© 2024 ONLYHXGS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
