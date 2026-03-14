import React from 'react'

function AboutIntro() {
  return (
   

    // 
    <div className="grow">  
    
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            Who We Are
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
            Why Choose Our Tyre <br />
            Repair Services In Dubai?
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            We specialize in providing top-notch tyre repair services across
            Dubai, including fixing tyre punctures, car tyre puncture repair,
            and flat tyre repair. Our team of skilled technicians ensures your
            vehicle is road-ready in no time.
          </p>

          <button className="mt-6 bg-yellow-500 px-6 py-3 font-semibold hover:bg-yellow-600 transition">
            <a href="tel:+971501478398">CONTACT US</a> 
          </button>

          {/* Phone */}
          <div className="flex items-center mt-10 gap-4">
            <div className="bg-yellow-500 p-4 rounded">
              📞
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                CUSTOMER SERVICES
              </p>

              <h3 className="text-xl font-bold">
                +971501478398
              </h3>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6 relative">

          {/* large image */}
          <img
            src="https://tyreservicesuae.com/wp-content/uploads/2025/02/i-2025-02-10T130322.924.webp"
            className="col-span-1 row-span-2 rounded-lg shadow-lg"
            alt="tyre repair"
          />

          {/* small image */}
          <img
            src="https://tyreservicesuae.com/wp-content/uploads/2025/02/1084.webp"
            className="rounded-lg shadow-lg"
            alt="tyre"
          />

          {/* yellow box */}
          <div className="bg-yellow-500 flex flex-col justify-center items-center text-center p-6 rounded-lg shadow-lg">

            <h3 className="text-4xl font-bold">
              15+
            </h3>

            <p className="font-medium">
              Years of Experience
            </p>

          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default AboutIntro