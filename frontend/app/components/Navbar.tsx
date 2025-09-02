import { Link } from "react-router";
import { Button } from "./ui/button";
import logo from "../../public/logo1.png";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
            {/* Logo + Name */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="Eventify Logo" className="w-12 h-12" />
                <Link to="/" className="text-xl font-bold text-gray-900">
                    Eventify
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-6 text-gray-600">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <Link to="/events" className="hover:text-blue-600">Events</Link>
                <Link to="/about" className="hover:text-blue-600">About Us</Link>
                <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-3">
                <Button asChild>
                    <Link to="/signup">Sign Up</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link to="/login">Login</Link>
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
