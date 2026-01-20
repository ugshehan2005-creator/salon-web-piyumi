import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(contentRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
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
        <section id="about" ref={sectionRef} className="py-20 px-4 bg-cream">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div ref={contentRef} className="order-2 md:order-1">
                    <h2 className="text-4xl font-serif text-text-dark mb-6">About Us</h2>
                    <div className="space-y-4 text-lg text-text-dark/80 leading-relaxed">
                        <p>
                            At <span className="font-semibold text-blush-darker">Glow & Grace</span>, we are a team of passionate beauty experts dedicated to helping you look and feel your best. With over 8 years of combined experience in skincare, makeup artistry and beauty treatments, we deliver personalized care — because every client is unique.
                        </p>
                        <p>
                            Our mission: To create a relaxing, elegant space for women to unwind, rejuvenate, and rediscover their natural beauty. We use high-quality products, maintain strict hygiene, and treat every guest like royalty.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {['Clean & Sanitized', 'Personalized Care', 'Relaxing Atmosphere'].map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm font-medium text-text-dark/70">
                                <span className="w-2 h-2 bg-blush rounded-full" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="order-1 md:order-2 relative h-[400px] w-full bg-neutral rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    {/* Replace styled div with actual image when available */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blush/20 to-lavender/20 flex items-center justify-center text-text-dark/30 font-serif text-2xl">
                        Salon Interior Image
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
