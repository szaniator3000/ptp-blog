import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Polskie Towarzystwo Psychiatryczne</h2>
          <h5>Oddział Kujawsko-Pomorski</h5>
          </div>
          <div className="flex items-center">
            <ul className="flex flex-col md:flex-row list-none">
              <li className="md:ml-4">
                <Link href="/management" className="text-sm font-medium">
                  O nas
                </Link>
              </li>
              <li className="md:ml-4">
                <Link href="/contact" className="text-sm font-medium">
                  Kontakt
                </Link>
              </li>
            </ul>
            <ul className="flex ml-4 list-none">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebook className="h-6 w-6" />
                </a>
              </li>
              <li className="ml-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter className="h-6 w-6" />
                </a>
              </li>
              <li className="ml-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-sm mt-4 text-center">&copy; {currentYear} Polskie Towarzystwo Psychiatryczne. Wszelkie prawa zastrzeżone.</div>
      </footer>
  );
};

export default Footer;
