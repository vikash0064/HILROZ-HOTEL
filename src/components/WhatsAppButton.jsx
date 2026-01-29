import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "919872423522";
    const displayNum = "98724 23522";
    const message = "Hello! I'm interested in booking a stay at Hotel Hilroz.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-button"
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group flex flex-col items-center gap-2"
            aria-label="Contact us on WhatsApp"
        >
            {/* Button */}
            <div className="relative bg-[#1A1A1A] text-white p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-black group-active:scale-95 flex items-center justify-center border border-white/10">
                <MessageCircle size={28} className="md:w-8 md:h-8" fill="white" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-4 py-2 bg-white text-[#1A1A1A] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                    Chat with us
                </span>
            </div>

            {/* Phone Number Label */}
            <span className="text-[10px] md:text-xs font-medium tracking-[0.1em] text-[var(--accent-color)] bg-[var(--bg-color)]/80 backdrop-blur-sm px-2 py-1 rounded-sm border border-[var(--accent-color)]/20 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                {displayNum}
            </span>
        </a>
    );
};

export default WhatsAppButton;
