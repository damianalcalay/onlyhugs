// components/TermsOfService.js
import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Welcome to <strong>BLUEBELVET</strong>. By accessing our website and using our services, you
        agree to comply with these Terms of Service. If you do not agree with any of the terms
        outlined here, please do not use our website or services.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using this website, you confirm that you have read, understood, and agree to abide by
        these Terms of Service. We reserve the right to modify these terms at any time, and any
        changes will be posted on this page.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Use of the Website</h2>
      <p className="mb-4">
        This website is intended solely for users seeking information about our services and for
        contacting us through the form provided. Unauthorized use of this website is prohibited,
        including but not limited to attempts to access restricted areas, modify site content, or
        use the site for any illegal purposes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website, including text, graphics, logos, images, videos, and any other
        material, is the property of <strong>BLUEBELVET</strong> or its licensors and is protected
        by intellectual property laws. You may not use, copy, reproduce, or distribute any content
        without our prior written consent.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Links to Third-Party Sites</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. These links are provided solely for
        your convenience. We are not responsible for the content or privacy practices of those
        external sites, and access to them is at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        We do not guarantee that the website will always be available or error-free. To the extent
        permitted by law, we shall not be liable for any direct, indirect, incidental, or
        consequential damages resulting from the use or inability to use the website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Modifications to the Site and Services</h2>
      <p className="mb-4">
        We reserve the right to modify or discontinue the website and any related services, whether
        temporarily or permanently, at any time and without prior notice. We shall not be liable to
        you or any third party for any modification, suspension, or interruption of service.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Privacy</h2>
      <p className="mb-4">
        The use of our services is also subject to our{" "}
        <a href="/politica-de-privacidad" className="text-blue-500">
          Privacy Policy
        </a>
        . We encourage you to review our Privacy Policy to learn more about how we handle your
        personal data.
      </p>

      <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These Terms of Service shall be governed by and construed in accordance with the laws of the
        country where <strong>BLUEBELVET</strong> operates. Any disputes related to these terms
        shall be resolved in the courts of that jurisdiction.
      </p>

      <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
      <p className="mb-4">
        If you have any questions or concerns about these Terms of Service, please feel free to
        contact us via email:
      </p>
      <p className="mb-4">
        Email:{" "}
        <a href="mailto:BLUEBELVET@support.com" className="text-blue-500">
          [contact email]
        </a>
      </p>

      <p className="text-sm text-gray-500">Last updated: [Date]</p>
    </div>
  );
};

export default TermsOfService;
