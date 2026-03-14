import React from 'react';
import ServiceIntro from '../components/ServiceIntro';
import Fitting from '../components/Fitting';
import Range from '../components/Range';
import WhyChoose from '../components/WhyChoose';
import Services from '../components/Services';


// small video section
const VideoSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">
        Mobile Tyre Fitting Dubai <br /> At Your Convenience
      </h2>
      <p className="mb-6">
        Need new tyres in Dubai? We offer a wide range of brands and sizes. Mobile fitting available!
      </p>
      {/* placeholder for video */}
      <div className="relative mx-auto w-full max-w-2xl group">
        <div className="aspect-w-16 aspect-h-9 transform transition-transform group-hover:scale-105">
          <iframe
            src="https://www.youtube.com/embed/VhBl3dHT5SY"
            title="Tyre Services Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <a
        href="http://wa.me/+971554244789"
        className="mt-6 inline-block bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded"
      >
        WhatsApp Us
      </a>
    </div>
  </section>
);

const Service = () => (
  <div>
   <Helmet>
        <title>Tyre Repair Services UAE</title>

        <meta
          name="description"
          content="Professional tyre puncture repair, mobile tyre replacement, and emergency tyre fixing services."
        />

        <link rel="canonical" href="https://tyrefixerr.com/service" />
      </Helmet>
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

          <h1 className="text-5xl font-bold text-gray-800">
            SERVICES
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            We do tire changes, tire repairs, and tire replacements.
          </p>

        </div>
      </div>
    </section>

    {/* repeat intro, fitting, range and video */}
    <Services />
    {/* <ServiceIntro /> */}
    <Fitting />
    <Range />
    <VideoSection />
    
    <WhyChoose />
    
  </div>
);

export default Service;
