import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "919872423522"; // Using the number from the footer
    const message = "Hello! I'm interested in booking a stay at Hotel Hilroz.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-button"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] group flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

            {/* Button */}
            <div className="relative bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95 flex items-center justify-center">
                <MessageCircle size={24} className="md:w-6 md:h-6" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-4 py-2 bg-white text-[#1A1A1A] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                    Chat with us
                </span>
            </div>
        </a>
    );
};

export default WhatsAppButton;
