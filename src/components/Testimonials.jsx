import React, { useState } from 'react';

const reviews = [
  {
    text:
      'Stuck on a highway with a flat tire, I was relieved to find Tyre services uae prompt service. Their efficient response and expert tire fixing skills got me back on the road swiftly. Highly recommend their reliable assistance for any roadside emergencies.',
    name: 'Sarah D.',
    img: 'https://tyreservicesuae.com/wp-content/uploads/2025/02/12.jpg',
  },
  {
    text:
      "I was glad to find Tyre Services UAE's quick assistance when I was stuck on a highway with a flat tire. I was able to get back on the road quickly thanks to their prompt response and skilled tire repair. I heartily endorse their dependable support for any roadside crises.",
    name: 'Mark T.',
    img: 'https://tyreservicesuae.com/wp-content/uploads/2025/02/11.jpg',
  },
  {
    text:
      "When I had a flat tire and was trapped on a highway, I was relieved to find Tyre Services UAE's prompt assistance. Their fast response and expert tire repair allowed me to get back on the road as soon as possible. For any roadside emergencies, I wholeheartedly recommend their trustworthy assistance.",
    name: 'Jennifer K.',
    img: 'https://tyreservicesuae.com/wp-content/uploads/2025/02/10.jpg',
  },
  
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0); // index of leftmost visible review
  const prev = () => setCurrent(i => Math.max(0, i - 1));
  const next = () => setCurrent(i => Math.min(reviews.length - 3, i + 1)); // only slide when more items than visible

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-8">
        <h6 className="text-brand uppercase">Testimonial</h6>
        <h2 className="text-3xl font-bold mt-2">Customer Feedback</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We provided people with information services and asked for their
          feedback to improve our customer service and meet needs.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* universal carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform"
            style={{ transform: `translateX(-${current * (100 / 3)}%)`, width: `${reviews.length * (100 / 3)}%` }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-8 bg-wh rounded shadow flex flex-col"
                style={{ flex: '0 0 33.333%' }}
              >
                <p className="text-gray-800 grow">"{r.text}"</p>
                <div className="mt-4 flex items-center">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <span className="font-semibold">{r.name}</span>
                </div>
                <div className="h-1 bg-brand mt-4" />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-brand text-white p-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-brand text-white p-2 rounded-full"
        >
          ›
        </button>

        {/* indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer $
                current === i ? 'bg-brand' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
