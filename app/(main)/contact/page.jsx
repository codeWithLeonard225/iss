// app/(main)/contact/page.js

import Link from 'next/link';

// Local metadata export for page-specific SEO
export const metadata = {
  title: "Contact Us | The International School Ltd Secondary – Address, Phone, Email",
  description:
    "Get in touch with The International School Ltd Secondary. Find our campus address, contact numbers, email, and office hours in New England, Freetown, Sierra Leone.",
};

export default function ContactPage() {
  return (
    <div className="contact-page-content pt-10">
      
      {/* =====================================================
          1. HERO HEADER: Introduction
      ====================================================== */}
      <section className="bg-blue-900 py-16 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          We'd Love to Hear From You
        </h1>
        <p className="text-xl max-w-3xl mx-auto opacity-90">
          Reach out to The International School Ltd Secondary via phone, email, or our contact form.
        </p>
      </section>

      {/* =====================================================
          2. CONTACT DETAILS & OFFICE HOURS
      ====================================================== */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Email */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md border-b-4 border-green-500">
            <span className="text-4xl mb-3 block">📧</span>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">
              For general and admission inquiries:
            </p>
            <Link href="mailto:info@tis-secondary.sl" className="text-lg font-semibold text-green-600 hover:text-green-700 transition">
              info@tis-secondary.sl
            </Link>
          </div>

          {/* Phone */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md border-b-4 border-blue-800">
            <span className="text-4xl mb-3 block">📞</span>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Reach our main office during business hours:
            </p>
            <Link href="tel:+23276XXXXXXX" className="text-lg font-semibold text-green-600 hover:text-green-700 transition">
              (+232) 76 XXX XXX
            </Link>
          </div>
          
          {/* Office Hours */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md border-b-4 border-green-500">
            <span className="text-4xl mb-3 block">⏰</span>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Office Hours</h3>
            <div className="text-gray-600">
              <p><strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM</p>
              <p><strong>Saturday/Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. ADDRESS, MAP, AND CONTACT FORM
      ====================================================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* CONTACT FORM */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-green-500 pb-2">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input type="text" id="name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                <input type="email" id="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
                <select id="subject" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Student Portal Support</option>
                    <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Your Message</label>
                <textarea id="message" rows="4" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
          
          {/* ADDRESS & MAP */}
          <div className="space-y-8">
            <div className="bg-blue-800 p-8 text-white rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-3">Our Location</h3>
              <p className="text-lg font-light mb-4 leading-relaxed">
                <strong>The International School Ltd Secondary</strong>
                <br />
                New England, 
                <br />
                Freetown, Sierra Leone
              </p>
              <Link
                href="https://www.google.com/maps/search/New+England+Freetown+Sierra+Leone"
                target="_blank"
                className="inline-block border border-green-400 text-green-400 hover:bg-green-400 hover:text-blue-900 font-semibold px-6 py-2 rounded-full transition"
              >
                View on Google Maps →
              </Link>
            </div>
            
            {/* Embedded Map */}
            <div className="relative h-96 w-full rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.564531980841!2d-13.2388!3d8.4844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c38d3886f38d%3A0x67c0500e263c9b74!2sNew%20England%2C%20Freetown!5e0!3m2!1sen!2ssl!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location in New England"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}