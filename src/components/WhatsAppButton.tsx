"use client"

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const WhatsAppButton: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const whatsappUrl = "https://api.whatsapp.com/send?phone=+924232215942&text=I came across your website and was wondering if you could assist me with some information about [product/service]. Can we chat now?";

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        {/* Custom Tooltip, positioned above the button */}
        {isTooltipVisible && (
          <div className="absolute bottom-full mb-4 w-max bg-[#595b5b] text-white px-2 py-1 rounded-md text-sm shadow-lg">
            Whatsapp us
          </div>
        )}
        
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className= "bg-[#25d366] text-white rounded-full flex items-center justify-center w-16 h-16 text-4xl shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={40} />
        </Link>
      </div>
    </div>
  );
};

export default WhatsAppButton;
