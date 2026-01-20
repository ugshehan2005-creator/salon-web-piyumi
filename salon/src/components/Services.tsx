import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaSpa, FaMagic, FaUserTie, FaGem, FaGift } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Skin Care & Facials",
        description: "Rejuvenating facials, deep-cleansing skin treatments, anti-acne care, and glow facials for radiant skin.",
        icon: <FaSpa className="text-4xl text-blush" />,
    },
    {
        title: "Makeup & Glam",
        description: "Bridal make-up, party make-up, natural day-look, and special occasion glam by expert artists.",
        icon: <FaMagic className="text-4xl text-blush" />,
    },
    {
        title: "Dressing & Styling",
        description: "Traditional outfit styling, modern attire make-over, and personal styling consultations.",
        icon: <FaUserTie className="text-4xl text-blush" />,
    },
    {
        title: "Facial Treatments",
        description: "Specialized acne treatment, anti-aging facial, hydrating facial, and brightening therapies.",
        icon: <FaGem className="text-4xl text-blush" />,
    },
    {
        title: "Packages",
        description: "Exclusive “Glow Package” and “Bridal Package” combining skincare, makeup, and styling.",
        icon: <FaGift className="text-4xl text-blush" />,
    }
];

const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(cardsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 75%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section id="services" ref={sectionRef} className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-serif text-text-dark text-center mb-4">Our Services</h2>
                <p className="text-center text-text-dark/70 mb-12 max-w-2xl mx-auto">
                    Explore our wide range of beauty treatments designed to make you shine.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group border border-transparent hover:border-blush/20"
                        >
                            <div className="mb-6 p-4 bg-cream rounded-full group-hover:bg-blush/20 transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-medium text-text-dark mb-3">{service.title}</h3>
                            <p className="text-text-dark/70 leading-relaxed text-sm">{service.description}</p>
                            <button className="mt-6 text-blush-darker font-medium hover:underline text-sm uppercase tracking-wide">
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
