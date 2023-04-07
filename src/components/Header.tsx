import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
    name: string;
    path: string;
}

const NavLinks: NavLink[] = [
    { name: "Główna", path: "/" },
    { name: "Zarząd", path: "/management" },
    { name: "Członkowstwo", path: "/memebrship" },
    { name: "Składki członkowskie", path: "/contributions" },
    { name: "Statut", path: "/statut" },
    { name: "Kontakt", path: "/contact" },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="bg-gray-800">
            <nav className="container mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <span className="text-white font-bold">Medical Blog</span>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                        >
                            {showMenu ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
                <div className={`md:flex ${showMenu ? "block" : "hidden"}`}>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        {NavLinks.map((link) => (
                            <Link key={link.path} href={link.path}>
                                <span className="text-white py-2 md:py-0 md:px-4 text-sm md:text-base font-medium hover:text-gray-300">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
