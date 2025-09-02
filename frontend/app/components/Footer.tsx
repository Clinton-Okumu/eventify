import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../public/logo1.png";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top row */}
                <div className="flex flex-col md:flex-row items-center justify-between py-6">
                    {/* Logo + name */}
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Eventify Logo" className="w-12 h-12" />

                        <span className="font-semibold text-gray-800">Eventify</span>
                    </div>

                    {/* Links */}
                    <nav className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
                        <a href="/about" className="hover:text-blue-600">
                            About Us
                        </a>
                        <a href="/contact" className="hover:text-blue-600">
                            Contact
                        </a>
                        <a href="/privacy" className="hover:text-blue-600">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="hover:text-blue-600">
                            Terms of Service
                        </a>
                    </nav>

                    {/* Social icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-blue-600">
                            <FaTwitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600">
                            <FaFacebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600">
                            <FaInstagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
                    © 2025 Eventify. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
