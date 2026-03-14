import React from 'react';

const Contact = () => (
  <div>
     <Helmet>
        <title>Contact Tyre Fixer UAE</title>

        <meta
          name="description"
          content="Contact Tyre Fixer UAE for 24/7 mobile tyre repair service anywhere in UAE."
        />

        <link rel="canonical" href="https://tyrefixerr.com/contact" />
      </Helmet>
    {/* title */}
    <section
      className="relative h-[420px] flex items-center"
      style={{
        backgroundImage:
          "url('https://tyreservicesuae.com/wp-content/uploads/2025/02/1084.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="bg-white p-10 max-w-lg shadow-lg  relative lg:right-[350px] ">

          <h1 className="text-5xl font-bold text-gray-800 uppercase">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Contact us for tire tire replacements and tire repair.
          </p>

        </div>
      </div>
    </section>

    {/* form and info */}
    <section className="py-16 container mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* contact info */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
          <p className="mb-4">Contact us for tire replacement, tire repair and tire replacement.</p>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mr-2 text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </span>
              <div>
                <div className="font-semibold">Location</div>
                <div>UAE</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </span>
              <div>
                <div className="font-semibold">Email us</div>
                <div>info@tyreservicesuae.com</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.2.48 2.5.74 3.83.74a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.33.26 2.63.74 3.83a1 1 0 01-.27 1.11l-2.35 2.35z"/>
                </svg>
              </span>
              <div>
                <div className="font-semibold">Call us</div>
                <div>+971554244789</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* map */}
    <section className="w-full">
      <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=UAE&t=m&z=14&output=embed&iwloc=near"
        title="UAE"
        className="w-full h-64"
      ></iframe>
    </section>
  </div>
);

export default Contact;
