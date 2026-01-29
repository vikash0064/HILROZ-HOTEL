import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Dining = () => {
    const containerRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                },
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: 'power4.out',
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="dining" ref={containerRef} className="relative h-[70vh] md:h-[80vh] w-full p-0 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/assets/dining.jpg"
                    alt="Dining Experience"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
            </div>

            <div ref={textRef} className="relative z-10 text-center text-white px-6 md:px-4">
                <p className="text-[var(--accent-color)] uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 font-medium text-xs md:text-sm">Culinary Excellence</p>
                <h2 className="text-3xl md:text-7xl font-serif mb-6 md:mb-8 leading-tight">Taste of Sublime <br className="md:hidden" /> Sophistication</h2>
                <p className="max-w-2xl mx-auto text-sm md:text-xl opacity-80 font-light leading-relaxed mb-8 md:mb-10">
                    From sunrise breakfasts to candlelit dinners, our chefs curate a symphony of flavors that honor local traditions while embracing global techniques.
                </p>
                <button className="lux-button border-white text-white hover:bg-white hover:text-black px-10 py-3 text-[10px] md:px-12 md:py-4 md:text-xs">
                    Book a Table
                </button>
            </div>
        </section>
    );
};

export default Dining;
