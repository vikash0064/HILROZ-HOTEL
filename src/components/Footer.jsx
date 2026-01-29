import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 md:py-48 px-8 md:px-16 border-t border-[var(--accent-color)]/20">
            <div className="lux-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 lg:gap-32 text-center md:text-left">
                    <div className="col-span-1 md:col-span-2">
                        <h1 className="text-3xl md:text-4xl font-serif tracking-[0.2em] text-[var(--accent-color)] mb-6 md:mb-10 mx-auto md:mx-0">
                            HILROZ
                        </h1>
                        <p className="max-w-md mx-auto md:mx-0 opacity-60 leading-relaxed font-light mb-8 md:mb-12 text-base md:text-lg">
                            Experience the pinnacle of hospitality in Amritsar. Where heritage meets contemporary luxury in every detail.
                        </p>
                        <div className="flex justify-center md:justify-start gap-6 md:gap-8">
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity tracking-widest text-[10px] md:text-xs uppercase">Instagram</a>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity tracking-widest text-[10px] md:text-xs uppercase">Facebook</a>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity tracking-widest text-[10px] md:text-xs uppercase">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mb-6 md:mb-10 text-[var(--accent-color)]">Quick Links</h4>
                        <ul className="flex flex-col gap-4 md:gap-6 font-light opacity-60 text-sm md:text-base">
                            <li><a href="#about" className="hover:text-[var(--accent-color)] transition-colors">About Us</a></li>
                            <li><a href="#rooms" className="hover:text-[var(--accent-color)] transition-colors">Rooms & Suites</a></li>
                            <li><a href="#dining" className="hover:text-[var(--accent-color)] transition-colors">Dining</a></li>
                            <li><a href="#gallery" className="hover:text-[var(--accent-color)] transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mb-6 md:mb-10 text-[var(--accent-color)]">Contact</h4>
                        <div className="flex flex-col gap-4 md:gap-6 font-light opacity-60 leading-loose text-sm md:text-base">
                            <p>City Centre Main Market, <br className="md:hidden" /> Amritsar, Punjab 143001</p>
                            <p>098724 23522</p>
                            <p>reservations@hilroz.com</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 md:mt-32 pt-10 md:pt-12 border-t border-[var(--accent-color)]/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 opacity-40 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-center">
                    <p>© 2026 Hotel Hilroz. All Rights Reserved.</p>
                    <div className="flex gap-6 md:gap-8">
                        <a href="#" className="hover:text-[var(--accent-color)] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[var(--accent-color)] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
