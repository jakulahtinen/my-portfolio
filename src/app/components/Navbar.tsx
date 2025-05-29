'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Areas', href: '#dev-cards' },
    { name: 'Experience', href: '#experience-cards'},
    { name: 'Skills', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Up', href: '#title' },
  ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50  backdrop-blur-md bg-black/75 px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-accent-600">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-xl">


                {/* Navigation left */}
                <ul className="hidden md:flex space-x-6">
                {navItems
                    .filter(item => item.name !== 'Yhteystiedot')  
                    .map(item => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            className="hover:text-green-600 transition-colors duration-200"
                        >
                        {item.name}
                        </a>
                    </li>
                    ))}
                </ul>

                {/* CV-button & Contact-button */}
                <div className="hidden md:flex items-center space-x-4">
                    <a 
                        href="/CV_Jaku_Lahtinen_ENG.pdf"
                        download
                    >
                    <button className="hidden md:block bg-green-600 text-white px-6 py-2 ring-1 ring-green-600 rounded-full hover:bg-green-700 transition-colors duration-200 cursor-pointer">
                        Download CV
                    </button>
                    </a>
                    <a
                        href="#contact"
                        className="border border-white px-6 py-2 rounded-full text-white hover:text-green-600 transition hover:border-green-600 font-semibold"
                    >
                    Contact
                </a>

                </div>

                {/* Mobile menu */}
                <button
                onClick={toggleMenu}
                className="md:hidden text-white focus:outline-none text-2xl pr-6"
                aria-label="Avaa valikko"
                >
                ☰
                </button>
            </div>

            {/* Mobile */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                <ul className="space-y-2">
                    {navItems.map(item => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 border-b border-gray-200 ${
                            item.name === 'Yhteystiedot' ? 'text-blue-greem font-semibold' : 'hover:text-green-600'
                        }`}
                        >
                        {item.name}
                        </a>
                    </li>
                    ))}
                </ul>

                {/* CV-button mobile */}
                <div className="mt-4">
                    <a
                        href="/CV_Jaku_Lahtinen_ENG.pdf"
                        download
                    >
                        <button className="w-full bg-green-600 text-white px-6 py-2 ring-1 ring-green-600 rounded-full hover:bg-green-700 transition-colors duration-200 cursor-pointer">
                            Download CV
                        </button>
                    </a>
                </div>

                {/* Contact-button mobile */}
                <div className="mt-4">
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center border border-white px-6 py-2 rounded-full text-white hover:text-green-600 transition hover:border-green-600 font-semibold"
                    >
                        Contact
                    </a>
                    </div>
                </div>
            )}
        </nav>
  );
}