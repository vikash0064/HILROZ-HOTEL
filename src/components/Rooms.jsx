import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const rooms = [
    {
        title: 'The Presidential Suite',
        desc: 'Unmatched grandeur with panoramic city views and private butler service.',
        image: '/assets/room1.jpg',
        price: '₹25,000 / Night'
    },
    {
        title: 'Grand Heritage Room',
        desc: 'Echoing the classical architecture with modern comfort and handpicked art.',
        image: '/assets/room2.jpg',
        price: '₹12,000 / Night'
    },
    {
        title: 'Skyloft Terrace Duo',
        desc: 'Open-air luxury featuring private balconies and contemporary minimalism.',
        image: '/assets/room3.jpg',
        price: '₹18,000 / Night'
    }
];

const Rooms = () => {
    const containerRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.room-card');

            cards.forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 0,
                    y: i % 2 === 0 ? 50 : 100,
                    scale: 0.95,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="rooms" ref={containerRef} className="lux-container py-20 md:py-32">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 md:gap-12 px-6 md:px-0 text-center md:text-left">
                <div className="max-w-xl">
                    <p className="text-[var(--accent-color)] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-xs md:text-sm mb-4 md:mb-6">
                        Private Sanctuaries
                    </p>
                    <h2 className="text-3xl md:text-6xl leading-tight">
                        Where Comfort Meets <span className="italic">Grandeur</span>
                    </h2>
                </div>
                <button className="lux-link mb-2 text-[10px] md:text-xs">View All Suites →</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 px-6 md:px-0">
                {rooms.map((room, idx) => (
                    <div key={idx} className="room-card group cursor-pointer">
                        <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4] mb-6 md:mb-8">
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 md:bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-5 md:p-8 bg-[var(--bg-color)]/95 backdrop-blur-md translate-y-2 opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 shadow-xl border border-white/10">
                                <p className="text-[var(--accent-color)] text-[10px] md:text-sm tracking-widest mb-2 font-medium">{room.price}</p>
                                <button className="text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold">Reserve Now</button>
                            </div>
                        </div>
                        <h3 className="text-xl md:text-2xl mb-2 md:mb-3">{room.title}</h3>
                        <p className="text-xs md:text-sm opacity-60 font-light leading-relaxed">{room.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Rooms;
