import React from "react";
import AboutIntro from "../components/AboutIntro";

const About = () => {
  return (
    <div className="grow">
         <Helmet>
        <title>About Tyre Fixer UAE</title>

        <meta
          name="description"
          content="Learn about Tyre Fixer UAE and our professional mobile tyre repair services."
        />

        <link rel="canonical" href="https://tyrefixerr.com/about" />
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

          <h1 className="text-5xl font-bold text-gray-800 uppercase">
            About Us
          </h1>

          <p className="mt-6 text-lg text-gray-600">
             We do tire changes, tire repairs, and tire replacements.
          </p>

        </div>
      </div>
    </section>
    <AboutIntro />
    </div>
  );
};

export default About;