import React from 'react';

// rows of paired features for two‑column layout
const featureRows = [
  ['Expertise and Skill', 'Warranty and Guarantee'],
  ['Quality Parts and Equipment', 'Value for Money'],
  ['Safety and Reliability', 'Free Consultations'],
];

const WhyChoose = () => (
  <section className="py-16 relative bg-black text-white">
    {/* subtle patterned background */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{
        backgroundImage:
          "url('https://tyreservicesuae.com/wp-content/uploads/2025/02/1084.webp')",
      }}
    />
    <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://tyreservicesuae.com/wp-content/uploads/2025/02/i-2025-02-10T130140.871.webp"
          alt="Why choose us"
          className="w-full rounded"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h6 className="text-brand uppercase text-amber-400">Why Choose Us</h6>
        <h2 className="text-3xl font-bold mt-2">Benefits of Our Tyre Repair Services</h2>
        <p className="mt-4 text-gray-200">
          With <strong>mobile tyre change</strong> and <strong>mobile tire repair Dubai</strong>, we come to you.
          Competitive pricing for all services, including <strong>repair puncture</strong> and
          <strong>tire fix shop</strong> solutions. Skilled technicians for
          <strong>car tire repair</strong> and <strong>tire repair flat</strong> services.
        </p>
        <div className="mt-6 space-y-4">
          {featureRows.map((row, i) => (
            <div
              key={i}
              className={`flex justify-between items-center ${
                i < featureRows.length - 1 ? 'border-b border-gray-700 pb-4' : ''
              }`}
            >
              {row.map((text, j) => (
                <div key={j} className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-brand shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChoose;
