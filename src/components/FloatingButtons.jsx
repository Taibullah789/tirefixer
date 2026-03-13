import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <>
      {/* Call Button - Left */}
      <a
  href="tel:+971554244789"
  className="fixed bottom-6 left-6 bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg z-50"
>
  <FaPhoneAlt size={20} />
</a>

<a
  href="https://wa.me/971554244789"
  className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg z-50"
>
  <FaWhatsapp size={22} />
</a>
    </>
  );
};

export default FloatingButtons;