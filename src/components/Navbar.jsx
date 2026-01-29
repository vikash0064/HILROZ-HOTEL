import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Hotel', href: '#hero' },
        { name: 'Rooms', href: '#rooms' },
        { name: 'Dining', href: '#dining' },
        { name: 'Experience', href: '#amenities' },
        { name: 'Gallery', href: '#gallery' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:py-6 md:px-16 flex justify-between items-center ${isScrolled ? 'bg-[var(--bg-color)]/95 backdrop-blur-md shadow-sm py-3 md:py-4' : 'bg-transparent'
                }`}
        >
            <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-serif tracking-[0.2em] md:tracking-widest text-[var(--accent-color)]">
                    HILROZ
                </h1>
            </div>

            <div className="hidden md:flex items-center gap-12">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="lux-link">
                        {link.name}
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <button
                    onClick={toggleTheme}
                    className="hidden md:flex p-2 rounded-full hover:bg-[rgba(197,160,89,0.1)] transition-colors"
                    aria-label="Toggle Theme"
                >
                    {isDark ? <Sun size={18} className="text-[var(--accent-color)]" /> : <Moon size={18} className="text-[var(--accent-color)]" />}
                </button>

                <button className="lux-button px-3 py-1.5 text-[9px] md:px-8 md:py-3 md:text-xs tracking-widest">
                    Reservations
                </button>

                <button
                    className="md:hidden text-[var(--text-color)] p-1"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-[var(--bg-color)] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-700 md:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-serif tracking-widest hover:text-[var(--accent-color)] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <button className="lux-button mt-4">
                    Reservations
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
