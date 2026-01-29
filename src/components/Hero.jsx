import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useEffect } from 'react';

const AbstractShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.sin(t / 4) / 4;
        meshRef.current.rotation.y = Math.cos(t / 4) / 4;
        meshRef.current.position.y = Math.sin(t / 2) / 10;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[10, 3, 100, 16]} />
                <meshStandardMaterial
                    color="#C5A059"
                    wireframe
                    transparent
                    opacity={0.15}
                    roughness={0.1}
                    metalness={1}
                />
            </mesh>
        </Float>
    );
};

const Particles = () => {
    const count = 1000;
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 50;
            p[i * 3 + 1] = (Math.random() - 0.5) * 50;
            p[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return p;
    }, []);

    const pointsRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.05;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={points}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#C5A059"
                transparent
                opacity={0.5}
                sizeAttenuation
            />
        </points>
    );
};

const Hero = () => {
    const titleRef = useRef();
    const subtitleRef = useRef();
    const ctaRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 2, delay: 0.5 }
        )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1.5 },
                '-=1.2'
            )
            .fromTo(ctaRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 1 },
                '-=1'
            );
    }, []);

    return (
        <div id="hero" className="relative h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-color)]">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#C5A059" />
                    <Suspense fallback={null}>
                        <AbstractShape />
                        <Particles />
                        <Environment preset="city" />
                    </Suspense>
                </Canvas>
            </div>

            <div className="relative z-10 text-center px-6">
                <p ref={subtitleRef} className="text-xs md:text-base uppercase tracking-[0.4em] mb-4 md:mb-6 text-[var(--accent-color)] font-medium">
                    Experience Pure Serenity
                </p>
                <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl mb-8 md:mb-12 max-w-5xl mx-auto leading-tight">
                    Redefining <span className="italic">Luxury</span> in Amritsar
                </h1>
                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
                    <button className="lux-button px-10 py-3 md:px-12 md:py-4 text-xs md:text-sm">
                        Book Your Stay
                    </button>
                    <button className="lux-link flex items-center gap-2 text-[10px] md:text-xs">
                        Explore Suites
                        <span className="text-[var(--accent-color)]">→</span>
                    </button>
                </div>
            </div>

            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-pulse hidden md:block">
                <div className="w-[1px] h-12 md:h-20 bg-[var(--accent-color)] opacity-30"></div>
            </div>
        </div>
    );
};

export default Hero;
