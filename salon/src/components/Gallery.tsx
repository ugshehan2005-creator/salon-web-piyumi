import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const Gallery = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;

        gsap.fromTo(el,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);

    return (
        <section id="gallery" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-serif text-text-dark text-center mb-12">Graceful Moments</h2>

                <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="aspect-[3/4] overflow-hidden rounded-xl relative group">
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center max-w-3xl mx-auto">
                    <blockquote className="text-2xl font-serif text-text-dark/80 italic">
                        "Glow & Grace transformed my skin — I have never felt more confident!"
                    </blockquote>
                    <cite className="block mt-4 text-blush-darker font-medium not-italic">— Sarah Mitchell, Regular Client</cite>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
