
import React from "react";
import { Hotel, MapPin, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <Hotel className="text-green-400" size={28} />
              <h2 className="text-2xl font-bold">StayPulse</h2>
            </div>

            <p className="text-sm leading-6 text-gray-400">
              Discover comfortable stays, explore amazing destinations,
              and book your perfect hotel with StayPulse.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-green-400">Home</a></li>
              <li><a href="/hotels" className="hover:text-green-400">Explore Hotels</a></li>
              <li><a href="/about" className="hover:text-green-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Customer Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-green-400">Help Center</a></li>
              <li><a href="#" className="hover:text-green-400">Booking Policy</a></li>
              <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-green-400" />
                support@staypulse.com
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-400" />
                +91 98765 43210
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-green-400" />
                India
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} StayPulse. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Made with ❤️ for better stays.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
