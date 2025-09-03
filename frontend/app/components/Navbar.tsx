import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import logo from "/logo1.png";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-background shadow-sm">
            {/* Logo + Name */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="Eventify Logo" className="w-12 h-12" />
                <Link to="/" className="text-xl font-bold text-foreground">
                    Eventify
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-6 text-muted-foreground">
                <Link
                    to="/"
                    className={`hover:text-foreground ${location.pathname === "/" ? "text-primary font-semibold" : ""}`}
                >
                    Home
                </Link>
                <Link
                    to="/events"
                    className={`hover:text-foreground ${location.pathname === "/events" ? "text-primary font-semibold" : ""}`}
                >
                    Events
                </Link>
                <Link
                    to="/about"
                    className={`hover:text-foreground ${location.pathname === "/about" ? "text-primary font-semibold" : ""}`}
                >
                    About Us
                </Link>
                <Link
                    to="/contact"
                    className={`hover:text-foreground ${location.pathname === "/contact" ? "text-primary font-semibold" : ""}`}
                >
                    Contact
                </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
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
