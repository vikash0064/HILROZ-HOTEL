import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef();
    const imageRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                x: -100,
                duration: 1.5,
                ease: 'power3.out',
            });

            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                x: 100,
                duration: 1.5,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="lux-container relative overflow-hidden py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                <div ref={imageRef} className="relative aspect-[4/5] overflow-hidden group px-4 md:px-0">
                    <img
                        src="/assets/about.jpg"
                        alt="Luxury Hotel Entrance"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border-[10px] md:border-[20px] border-[var(--bg-color)] m-4 md:m-8 pointer-events-none"></div>
                </div>

                <div ref={contentRef} className="flex flex-col gap-6 md:gap-8 px-6 md:px-12">
                    <p className="text-[var(--accent-color)] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-xs md:text-sm">
                        Our Legacy
                    </p>
                    <h2 className="text-3xl md:text-6xl max-w-lg leading-tight">
                        A Sanctuary of Elegance & Heritage
                    </h2>
                    <div className="w-16 md:w-20 h-[1px] bg-[var(--accent-color)]"></div>
                    <p className="text-base md:text-lg leading-relaxed text-[var(--text-color)] opacity-80 font-light">
                        Hotel Hilroz stands as a testament to timeless luxury in the heart of Amritsar. We blend modern sophistication with traditional hospitality, creating an atmosphere that resonates with both comfort and grandeur.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-[var(--text-color)] opacity-80 font-light hidden sm:block">
                        Every corner of our establishment tells a story of meticulous design and unparalleled guest experience. From the softest linens to the subtle fragrance of incense, every detail is curated for your indulgence.
                    </p>
                    <div className="mt-2 md:mt-4">
                        <button className="lux-button px-8 py-3 text-[10px] md:px-12 md:py-4 md:text-xs">
                            Discover Our Story
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
