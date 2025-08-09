"use client"
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaBehance } from 'react-icons/fa';
import footerData from '@/json/footerData.json';
import { ChevronUp } from 'lucide-react';

const iconComponents: { [key: string]: React.ElementType } = {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
};

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-navbg text-white ">
      <div className="container mx-auto px-3 py-12  max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">COMPANY</h3>
            <ul>
              {footerData.company.map(item => (
                <li key={item.name} className="mb-2"><Link href={item.href} className="hover:text-cyan">{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">SERVICES</h3>
            <ul>
              {footerData.services1.map(item => (
                <li key={item.name} className="mb-2"><Link href={item.href} className="hover:text-cyan">{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">SERVICES</h3>
            <ul >
                {footerData.services2.map(item => (
                    <li key={item.name} className="mb-2"><Link href={item.href} className="hover:text-cyan">{item.name}</Link></li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-5">
              {footerData.technologies.map(tech => (
                <span key={tech} className="border border-gray-400  px-3 py-1 text-sm  hover:border-cyan hover:text-cyan cursor-pointer">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-cyan mt-12 mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2.5">
            <div className="flex space-x-4">
                {footerData.socials.map(social => {
                    const Icon = iconComponents[social.icon];
                    return (
                        <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="bg-cyan text-black p-2 rounded-full flex items-center text-2xl justify-center w-14 h-14">
                            <Icon />
                        </Link>
                    )
                })}
            </div>
            <button onClick={scrollToTop} className="bg-cyan text-white p-3 rounded-full">
            <ChevronUp className="text-navbg"/>
            </button>
        </div>
      </div>
      <div className="bg-cyan text-black text-sm py-4">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
    
    {/* Policies + Copyright */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-center">
      <Link href="#" className="flex items-center gap-2 ">
        <span className="text-2xl leading-none">&bull;</span> Privacy Policy
      </Link>
      <Link href="#" className="flex items-center gap-2">
        <span className="text-2xl leading-none">&bull;</span> Terms & Conditions
      </Link>
      <span className="text-center"> All rights reserved 2023 GSC</span>
    </div>

    {/* Email */}
    <div className="text-center">info@gsoftconsulting.com</div>
  </div>
</div>
    </footer>
  );
};

export default Footer;
