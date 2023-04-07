import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Company Name</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod sapien quis augue suscipit, a maximus velit aliquet. Sed
            bibendum auctor mi, nec sollicitudin libero congue ut.
          </p>
        </div>
        <div className="flex items-center">
          <ul className="flex flex-col md:flex-row list-none">
            <li className="md:ml-4">
              <a href="#" className="text-sm font-medium">
                About
              </a>
            </li>
            <li className="md:ml-4">
              <a href="#" className="text-sm font-medium">
                Careers
              </a>
            </li>
            <li className="md:ml-4">
              <a href="#" className="text-sm font-medium">
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex ml-4 list-none">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
