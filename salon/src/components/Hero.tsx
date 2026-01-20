import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2 }
        )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1 },
                '-=0.6'
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.6'
            );
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
        >
            {/* Transparent background for video visibility */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" /> */}

            <div className="z-10 max-w-4xl mx-auto">
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-serif text-text-dark mb-6 tracking-tight opacity-0"
                >
                    Welcome to <span className="text-blush">Glow & Grace</span> Beauty Salon
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl text-text-dark/80 mb-10 font-light opacity-0"
                >
                    “Where beauty meets serenity — skin care, makeup, facials & more.”
                </p>

                <p className="text-lg text-text-dark/70 mb-8 max-w-2xl mx-auto hidden md:block">
                    At Glow & Grace, we believe every woman deserves to feel beautiful, confident and pampered. Step into our calming, luxurious world of beauty & care.
                </p>

                <button
                    ref={ctaRef}
                    className="bg-blush hover:bg-red-200 text-text-dark font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl opacity-0 cursor-pointer"
                >
                    Book Your Appointment
                </button>
            </div>

            {/* Decorative background element could go here */}
        </section>
    );
};

export default Hero;
