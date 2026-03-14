import React from 'react';

const Range = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      {/* header text and image */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2">
          <h6 className="text-brand uppercase text-amber-400">What we do</h6>
          <h2 className="text-3xl font-bold mt-2">Our Range of Tyre Services</h2>
          <p className="mt-4 text-gray-700">
            Whether you’re dealing with a <strong>tyre puncture repair in Dubai</strong>,
            need a <strong>flat tyre fix</strong>, or require a <strong>emergency tyre
            repair</strong>, our expert services ensure your safety and convenience on
            the road. From <strong>mobile tyre puncture repair</strong> to{' '}
            <strong>tyre alignment services</strong>, we’ve got you covered.
          </p>
          <a
            href="tel:+971501478398"
            className="mt-6 inline-block bg-amber-400 hover:bg-brand-dark text-white px-6 py-3 rounded"
          >
            Contact us
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://tyreservicesuae.com/wp-content/uploads/2025/12/O1CN013gzzjY1CqxRPVuufE_41531368113780133-0-tbvideo-1024x576.jpg"
            alt="Our range"
            className="w-full rounded"
          />
        </div>
      </div>

      {/* detailed service cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            img: 'https://tyreservicesuae.com/wp-content/uploads/2025/02/automechanic-unscrewing-tire-bolts-on-a-lifted-up-car-at-a-repair-shop-.jpg',
            title: 'Tyre Puncture Repair in Dubai',
            desc: 'Got a puncture flat tyre? Don’t worry! Our puncture repair services are quick, reliable, and affordable.',
            bullets: [
              'Tyre Puncture Repair Shop Dubai',
              'Best Tyre Repair Services in Dubai',
              'Fix Tyre Puncture',
              'Affordable Tyre Repair Dubai',
            ],
            button: { text: 'WhatsApp Us', type: 'whatsapp' },
          },
          {
            img: 'https://tyreservicesuae.com/wp-content/uploads/2025/02/i-2025-02-10T130116.918.webp',
            title: 'Mobile Tyre Repair Dubai',
            desc: 'Stranded with a flat tyre? Our mobile tyre repair Dubai service brings the solution to your doorstep.',
            bullets: [
              'Mobile Tyre Puncture Repair Dubai',
              '24/7 Flat Tire Repair Dubai',
              'Emergency Tyre Repair',
              'Quick Tyre Fix Dubai',
            ],
            button: { text: 'Contact us', type: 'contact' },
          },
          {
            img: 'https://tyreservicesuae.com/wp-content/uploads/2025/02/i-2025-02-10T130140.871.webp',
            title: 'Flat Tyre Puncture Repair',
            desc: 'A flat tyre puncture repair doesn’t have to ruin your day. Our experts provide efficient tyre repair services to get you back on the road safely.',
            bullets: [
              'Fix Flat Tyre',
              'Fix Flat Tyre at Home',
              'Flat Tyre Repair Dubai',
              'Tire Repair Flat',
            ],
            button: { text: 'WhatsApp Us', type: 'whatsapp' },
          },
          {
            img: 'https://tyreservicesuae.com/wp-content/uploads/2025/02/i-2025-02-10T130149.161.webp',
            title: 'Tyre Alignment Services',
            desc: 'Proper alignment is crucial for your vehicle’s performance. Visit our tyre alignment shop for professional service and enhanced driving experience.',
            bullets: [],
            button: { text: 'Contact us', type: 'contact' },
          },
          {
            img: 'https://tyreservicesuae.com/wp-content/uploads/2025/02/i-2025-02-10T131815.041.webp',
            title: 'Emergency Tyre Repair',
            desc: 'Facing a car tyre puncture in the middle of the night? Our 24‑hour tyre repair Dubai team is just a call away for emergency tyre service.',
            bullets: [],
            button: { text: 'WhatsApp Us', type: 'whatsapp' },
          },
          {
            img: 'https://tyreservicesuae.com/wp-content/uploads/2025/02/img_1.png',
            title: 'Tyre Replacement Services',
            desc: 'If your tyres are beyond repair, we offer replacement services with high‑quality options to suit your vehicle’s needs.',
            bullets: [],
            button: { text: 'Contact us', type: 'contact' },
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col"
          >
            <img src={card.img} alt={card.title} className="w-full h-48 object-cover rounded-t" />
            <div className="p-4 grow flex flex-col">
              <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{card.desc}</p>
              {card.bullets.length > 0 && (
                <ul className="text-gray-600 text-sm mb-4 space-y-1 list-disc list-inside">
                  {card.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              <div className="mt-auto">
                {card.button.type === 'whatsapp' ? (
                  <a
                    href="http://wa.me/971501478398"
                    className="inline-block bg-amber-400 hover:bg-brand-dark text-white px-4 py-2 rounded text-center w-full"
                  >
                    {card.button.text}
                  </a>
                ) : (
                  <a
                    href="tel:+971501478398"
                    className="inline-block bg-amber-400 hover:bg-brand-dark text-white px-4 py-2 rounded text-center w-full"
                  >
                    {card.button.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Range;
