import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">bigastores</h3>
          <p className="text-sm">
            Your go-to spot for affordable phone sales, repairs, accessories, and more.
            Quality service, unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/sell" className="hover:underline">Sell Your Phone</a></li>
            <li><a href="/swap" className="hover:underline">Phone Swapping</a></li>
            <li><a href="/fix" className="hover:underline">Repairs</a></li>
            <li><a href="/about" className="hover:underline">About us </a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm">
            WhatsApp: <a href="https://wa.me/2349036541012" className="underline">+2349036541012 </a>
          </p>
          <p className="text-sm">Email: support@bigastores.name.ng</p>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} bigastores. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
