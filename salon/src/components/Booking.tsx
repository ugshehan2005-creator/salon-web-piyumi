import React, { useState } from 'react';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Skin Care',
        date: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, service, date, message } = formData;

        const whatsappNumber = "94773262899"; // Assuming Sri Lanka code +94 based on user context

        // Format the message
        const text = `
*New Booking Request*
------------------
*Name:* ${name}
*Contact:* ${email}
*Service:* ${service}
*Date:* ${date}
*Message:* ${message}
------------------
    `.trim();

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="booking" className="py-20 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-serif text-text-dark text-center mb-2">Pre-Book Your Session</h2>
                <p className="text-center text-text-dark/70 mb-8">
                    Fill the form below, and we will contact you to confirm your booking.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-dark/80 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blush focus:border-transparent bg-neutral/20"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-dark/80 mb-1">Email or Phone</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blush focus:border-transparent bg-neutral/20"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-text-dark/80 mb-1">Service</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blush focus:border-transparent bg-neutral/20"
                            >
                                <option>Skin Care & Facials</option>
                                <option>Makeup & Glam</option>
                                <option>Dressing & Styling</option>
                                <option>Facial Treatments</option>
                                <option>Packages</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-text-dark/80 mb-1">Preferred Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blush focus:border-transparent bg-neutral/20"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-dark/80 mb-1">Message (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blush focus:border-transparent bg-neutral/20"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blush hover:bg-blush-darker text-text-dark font-medium py-3 px-12 rounded-full transition-colors duration-300 shadow-md transform hover:scale-105"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Booking;
