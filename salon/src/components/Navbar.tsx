import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for extra styling (optional, but good for UX)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#booking' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
            <nav
                className={`
          pointer-events-auto
          transition-all duration-300 ease-in-out
          ${scrolled ? 'py-3 px-8' : 'py-4 px-10'}
          bg-white/70 backdrop-blur-md border border-white/40 shadow-lg rounded-full
          flex items-center justify-between
          w-full max-w-5xl
        `}
            >
                {/* Logo */}
                <a href="#" className="text-2xl font-serif font-bold text-text-dark tracking-tight">
                    Glow & Grace
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-text-dark/80 hover:text-blush font-medium transition-colors duration-300 group text-sm uppercase tracking-wide"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blush transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#booking"
                        className="bg-blush hover:bg-blush-darker text-text-dark px-5 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 shadow-sm"
                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text-dark text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="absolute top-full mt-4 left-0 right-0 bg-cream/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50 flex flex-col space-y-4 text-center md:hidden animate-fade-in-down mx-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-text-dark text-lg font-medium hover:text-blush transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
