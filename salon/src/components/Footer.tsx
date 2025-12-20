import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-text-dark text-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">

                <div>
                    <h3 className="text-2xl font-serif mb-2">Glow & Grace</h3>
                    <p className="text-white/60 text-sm">Where beauty meets serenity.</p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-white/80 hover:text-blush transition-colors text-xl"><FaInstagram /></a>
                    <a href="#" className="text-white/80 hover:text-blush transition-colors text-xl"><FaFacebook /></a>
                    <a href="#" className="text-white/80 hover:text-blush transition-colors text-xl"><FaTwitter /></a>
                </div>

                <div className="text-sm text-white/50">
                    <p>123 Beauty Lane, Salon City</p>
                    <p>contact@glowandgrace.com</p>
                    <p>+1 (555) 123-4567</p>
                </div>
            </div>

            <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/30">
                © 2025 Glow & Grace Beauty Salon. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
