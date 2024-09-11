import React from "react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto text-center">
        {/* Información de contacto */}
        <div className="mb-4">
          <p className="text-lg">Contact Us</p>
          <p>Email: support@onlyhugs.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        {/* Derechos reservados */}
        <div className="mt-4">
          <p>© 2024 OnlyHugs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
