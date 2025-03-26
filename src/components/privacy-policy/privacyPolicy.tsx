// components/PrivacyPolicy.js
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>BLUEBELVET S.L.</strong> (hereinafter referred to as “the Agency”), we are
        committed to protecting and respecting the privacy of our users. This Privacy Policy
        describes how we collect, use, and protect the personal information you provide when using
        our website and contact form.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        When you visit our website and choose to complete the contact form, we may collect the
        following personal information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company or position (optional)</li>
        <li>
          Any other information you choose to include in the message sent through the contact form
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2. How We Use the Information</h2>
      <p className="mb-4">
        The collected information will be used solely for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>To contact you:</strong> We use your data to reach out and respond to your
          requests or inquiries.
        </li>
        <li>
          <strong>To schedule meetings or calls:</strong> Your data allows us to arrange meetings or
          calls to discuss the services we offer.
        </li>
        <li>
          <strong>To improve our services:</strong> The data helps us enhance our service offerings
          and user experience on our website.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. How We Protect Your Information</h2>
      <p className="mb-4">
        We take the security of your information seriously. We implement appropriate technical and
        organizational measures to protect your personal information against unauthorized access,
        disclosure, alteration, or destruction.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Sharing Information with Third Parties</h2>
      <p className="mb-4">
        The Agency will not sell, distribute, or rent your personal information to third parties.
        However, we may share your information with service providers who assist us in operating the
        website or organizing meetings, provided they agree to keep your information confidential
        and use it solely for the intended purposes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
      <p className="mb-4">You have the right to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Access, rectify, or delete the personal information we have collected.</li>
        <li>Withdraw your consent at any time regarding the use of your personal information.</li>
        <li>
          Request that we do not process your data for marketing or contact purposes if you so
          prefer.
        </li>
      </ul>
      <p className="mb-4">
        To exercise any of these rights, you may contact us via email at{" "}
        <a href="mailto:BLUEBELVET@support.com" className="text-blue-500">
          [contact email]
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
      <p className="mb-4">
        We will retain your personal data for as long as necessary to fulfill the purposes set out
        in this Privacy Policy, or for as long as required by law.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Links to Other Websites</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not responsible for the
        privacy practices or content of those external sites.
      </p>

      <h2 className="text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We reserve the right to modify this Privacy Policy at any time. Any changes will be posted
        on this page and will take effect immediately. We encourage you to review this page
        periodically to stay informed about how we protect your information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
      <p className="mb-4">
        If you have any questions or concerns about our Privacy Policy, please feel free to contact
        us at:
      </p>
      <p className="mb-4">
        Email:{" "}
        <a href="mailto:BLUEBELVET@support.com" className="text-blue-500">
          [contact email]
        </a>
      </p>

      <p className="text-sm text-gray-500">Last updated: March 11, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
