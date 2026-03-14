import React from 'react';

const ServiceIntro = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
      <div className="md:w-1/2">
        <img
          src="https://tyreservicesuae.com/wp-content/uploads/2025/02/img_5.png"
          alt="Mobile tyre repair"
          className="w-full rounded transform transition-transform hover:scale-105"
        />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
        <h6 className="text-brand uppercase text-amber-400">Our Services</h6>
        <h2 className="text-3xl font-bold mt-2">24/7 Mobile Tyre Repair</h2>
        <p className="mt-4 text-gray-700">
          Emergency tyre repair in Dubai, anytime, day or night. We’ll be there
          ASAP. Get immediate assistance! Stuck with a flat tyre? Our 24/7 mobile
          tyre repair service covers all of Dubai. Contact us now!
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
          <li className="hover:text-brand cursor-pointer transition-colors">Tyre Change Dubai</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Tyre Service in Dubai</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Mobile Tyre Puncture Repair</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Tyre Puncture Repair</li>
          <li className="hover:text-brand cursor-pointer transition-colors">24 Hour Tyre Repair</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Flat Tyre Repair</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ServiceIntro;
