
import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import { WhatsAppIcon } from './icons/Icons';

const Booking: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        
        try {
            // IMPORTANT: Replace "your_form_id" with your actual Formspree form ID
            const response = await fetch("https://formspree.io/f/your_form_id", {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus("Thank you! Your booking request has been sent.");
                form.reset();
            } else {
                const responseData = await response.json();
                setStatus(responseData.errors ? responseData.errors.map((error: { message: string }) => error.message).join(", ") : "Oops! There was a problem.");
            }
        } catch (error) {
            setStatus("Oops! There was a problem submitting your form.");
        }
    };

    const whatsappMessage = encodeURIComponent("Hello Lungile, I'm reaching out from your website for a booking inquiry.");
    const whatsappLink = `https://wa.me/27829664705?text=${whatsappMessage}`;

  return (
    <section id="booking" className="py-20 md:py-32 bg-charcoal dark:bg-black">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Book <span className="text-accent">Lungile</span></h2>
              <p className="max-w-3xl mx-auto mb-12 text-lg text-dark-text/80 leading-relaxed">
                Looking for an engaging MC, a vibrant DJ, or an inspirational speaker for your next event? Fill out the form below to start the conversation.
              </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white dark:bg-charcoal p-8 md:p-12 rounded-lg shadow-2xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal dark:text-dark-text mb-1">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 bg-base dark:bg-dark-bg/50 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal dark:text-dark-text mb-1">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 bg-base dark:bg-dark-bg/50 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
              </div>
              <div>
                <label htmlFor="event_type" className="block text-sm font-medium text-charcoal dark:text-dark-text mb-1">Type of Event</label>
                <select name="event_type" id="event_type" required className="mt-1 block w-full px-4 py-3 bg-base dark:bg-dark-bg/50 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent focus:border-accent">
                    <option>MC Services</option>
                    <option>DJ Services</option>
                    <option>Motivational Speaking</option>
                    <option>Brand Collaboration</option>
                    <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="event_date" className="block text-sm font-medium text-charcoal dark:text-dark-text mb-1">Event Date</label>
                <input type="date" name="event_date" id="event_date" required className="mt-1 block w-full px-4 py-3 bg-base dark:bg-dark-bg/50 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-charcoal dark:text-dark-text mb-1">Event Details & Message</label>
                <textarea name="message" id="message" rows={5} required placeholder="Tell me a bit about your event, venue, and requirements..." className="mt-1 block w-full px-4 py-3 bg-base dark:bg-dark-bg/50 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-accent focus:border-accent"></textarea>
              </div>
              <div className="md:col-span-2 text-center mt-4">
                <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-accent text-charcoal font-bold rounded-full hover:bg-accent-darker transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                  Send Booking Request
                </button>
                 {status && <p className="text-center mt-4 text-gray-text dark:text-dark-text">{status}</p>}
              </div>
            </form>
          </div>
          <div className="text-center mt-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
                <WhatsAppIcon />
                Chat for Urgent Inquiries
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Booking;
