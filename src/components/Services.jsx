import React from 'react';

const services = [
  { title: 'Tyre Repair Dubai', link: 'tel:+971554244789' },
  { title: 'Tyre Puncture Repair', link: 'http://wa.me/+971554244789' },
  { title: 'Tyre Change in Dubai', link: 'tel:+971554244789' },
  { title: 'Mobile Tyre Service', link: 'http://wa.me/+971554244789' },
  { title: '24/7 Tyre Repair', link: 'tel:+971554244789' },
  { title: 'Car Tire Change Dubai', link: 'http://wa.me/+971554244789' },
];

const Services = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map(s => (
          <a
            key={s.title}
            href={s.link}
            className="flex flex-col items-center bg-white p-6 rounded shadow hover:shadow-lg transition text-center"
          >
            <svg
              className="w-8 h-8 text-green-600 mb-2"
              fill="currentColor"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" fill="none" />
              <path d="M20 34l6 6 18-18" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
            <span className="text-sm font-medium">{s.title}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
