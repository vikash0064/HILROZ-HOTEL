import React from 'react';
import { Wind, Coffee, Waves, Tv, CloudRain, Shield } from 'lucide-react';

const amenityItems = [
    { icon: <Waves size={32} />, title: "Infinity Pool", desc: "Heated swimming pool with views of the golden horizon." },
    { icon: <Coffee size={32} />, title: "Artisan Cafe", desc: "Fresh brews and bespoke pastries available 24/7." },
    { icon: <CloudRain size={32} />, title: "Wellness Spa", desc: "Signature treatments inspired by ancient healing rituals." },
    { icon: <Shield size={32} />, title: "Concierge", desc: "Dedicated personal assistence for your every need." },
];

const Amenities = () => {
    return (
        <section id="amenities" className="lux-container py-20 md:py-32 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center px-6 md:px-0">
                <div className="flex flex-col gap-10 md:gap-12">
                    <div className="text-center md:text-left">
                        <p className="text-[var(--accent-color)] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-xs md:text-sm mb-4">The Experience</p>
                        <h2 className="text-3xl md:text-6xl mb-4 md:mb-8 leading-tight">Refined Indulgence, <br className="hidden md:block" /> Effortless Ease</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                        {amenityItems.map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-3 md:gap-4 group items-center md:items-start text-center md:text-left">
                                <div className="text-[var(--accent-color)] opacity-100 md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-300">
                                    {React.cloneElement(item.icon, { size: 28 })}
                                </div>
                                <h3 className="text-lg md:text-xl font-medium tracking-wide">{item.title}</h3>
                                <p className="text-xs md:text-sm opacity-60 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative grid grid-cols-2 gap-3 h-[400px] md:h-[600px] mt-8 md:mt-0">
                    <div className="translate-y-8 md:translate-y-12">
                        <img
                            src="/assets/spa.jpg"
                            alt="Spa"
                            className="w-full h-full object-cover rounded-sm shadow-2xl"
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/pool.jpg"
                            alt="Pool"
                            className="w-full h-full object-cover rounded-sm shadow-2xl"
                        />
                    </div>
                    <div className="col-span-2 -translate-y-6 md:-translate-y-8 h-[180px] md:h-[250px]">
                        <img
                            src="/assets/gym.jpg"
                            alt="Gym"
                            className="w-full h-full object-cover rounded-sm shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amenities;
