import React from 'react';

const Booking = () => {
    return (
        <section id="booking" className="bg-[var(--color-luxury-charcoal)] text-white py-24 md:py-48 mt-20 md:mt-40 px-6 md:px-0">
            <div className="lux-container max-w-5xl text-center">
                <p className="text-[var(--accent-color)] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-6 md:mb-10 font-medium whitespace-nowrap text-xs md:text-sm">Reservations</p>
                <h2 className="text-4xl md:text-7xl mb-12 md:mb-20 leading-tight">Plan Your Grand Escape</h2>

                <form className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-left bg-white/[0.03] p-10 md:p-28 backdrop-blur-md border border-white/10 shadow-3xl">
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-60">Check In</label>
                        <input
                            type="date"
                            className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--accent-color)] transition-colors text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-60">Check Out</label>
                        <input
                            type="date"
                            className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--accent-color)] transition-colors text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-60">Guests</label>
                        <select className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--accent-color)] transition-colors appearance-none text-sm">
                            <option className="bg-[#1A1A1A]">1 Guest</option>
                            <option className="bg-[#1A1A1A]">2 Guests</option>
                            <option className="bg-[#1A1A1A]">3+ Guests</option>
                        </select>
                    </div>
                    <div className="md:col-span-3 mt-4 md:mt-12">
                        <button type="submit" className="lux-button w-full border-white text-white hover:bg-white hover:text-black py-4 md:py-5 text-[11px] md:text-sm">
                            Check Availability
                        </button>
                    </div>
                </form>

                <p className="mt-12 md:mt-20 opacity-40 text-xs md:text-sm font-light italic tracking-widest px-4">
                    No credit card required for reservation. Best rate guaranteed on our official site.
                </p>
            </div>
        </section>
    );
};

export default Booking;
