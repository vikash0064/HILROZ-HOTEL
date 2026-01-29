import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const images = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
    "/assets/gallery4.jpg",
    "/assets/gallery5.jpg",
    "/assets/gallery6.jpg",
    "/assets/gallery7.jpg",
];

const Gallery = () => {
    const scrollRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".gallery-item", {
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                y: 100,
                stagger: 0.1,
                duration: 1.5,
                ease: "power4.out"
            });
        }, scrollRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="gallery" ref={scrollRef} className="lux-container py-20 md:py-32 px-6 md:px-0">
            <div className="text-center mb-16 md:mb-24">
                <p className="text-[var(--accent-color)] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-xs md:text-sm mb-4 md:mb-6">Gallery</p>
                <h2 className="text-3xl md:text-6xl leading-tight">Capturing Moments of <br className="md:hidden" /> <span className="italic">Splendor</span></h2>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-10 space-y-6 md:space-y-10">
                {images.map((img, i) => (
                    <div key={i} className="gallery-item overflow-hidden relative group rounded-sm shadow-xl">
                        <img
                            src={img}
                            alt={`Gallery ${i}`}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[var(--accent-color)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-white uppercase tracking-widest text-[9px] md:text-xs font-bold border border-white/40 px-3 py-1 md:px-4 md:py-2">View Larger</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
