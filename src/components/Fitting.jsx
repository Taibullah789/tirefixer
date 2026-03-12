import React from 'react';

const Fitting = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h6 className="text-lg uppercase text-amber-400">Our Services</h6>

        <h2 className="text-2xl font-bold">24/7 Mobile Tyre Repair</h2>
        <p className="mt-4 text-gray-700">
          Emergency tyre repair in Dubai, anytime, day or night. Well be
          there ASAP. Get immediate assistance! Stuck with a flat tyre? Our
          24/7 mobile tyre repair service covers all of Dubai. Contact us now!
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4 text-left">
          <li className="hover:text-brand cursor-pointer transition-colors">Tyre Change Dubai</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Tyre Service in Dubai</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Mobile Tyre Puncture Repair</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Tyre Puncture Repair</li>
          <li className="hover:text-brand cursor-pointer transition-colors">24 Hour Tyre Repair</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Flat Tyre Repair</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://tyreservicesuae.com/wp-content/uploads/2025/02/img_1.png"
          alt="mobile tyre fitting"
          className="w-full rounded"
        />
      </div>
    </div>
  </section>
);

export default Fitting;
