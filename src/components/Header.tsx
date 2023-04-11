import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavLink {
    name: string;
    path: string;
}

const NavLinks: NavLink[] = [
    { name: "Główna", path: "/" },
    { name: "Zarząd", path: "/management" },
    { name: "Członkowstwo", path: "/membership" },
    { name: "Składki członkowskie", path: "/contributions" },
    { name: "Statut", path: "/statute" },
    { name: "Do pobrania", path: "/downloads" },
    { name: "Kontakt", path: "/contact" },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="bg-white">
            <div className="container mx-auto max-w-screen-xl text-gray-800 px-4 py-6 flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            className="h-20 w-20 mr-2 gray"
                        />
                    </Link>
                    <div>
                        <h1 className="font-bold text-2xl leading-tight">
                            Polskie Towarzystwo Psychiatryczne
                        </h1>
                        <p className="text-lg">Oddział Kujawsko-Pomorski</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                    <div className="flex space-x-4">
                        {NavLinks.map((link) => (
                            <Link key={link.path} href={link.path}>
                                <span className="py-2 px-4 text-lg font-medium hover:text-gray-300">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="md:hidden flex justify-center">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        type="button"
                        className="text-gray-400 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                    >
                        {showMenu ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${showMenu ? "block" : "hidden"}`}>
                <div className="flex flex-col items-center justify-center">
                    {NavLinks.map((link) => (
                        <Link key={link.path} href={link.path}>
                            <span className="py-2 px-4 text-lg font-medium hover:text-gray-300">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
