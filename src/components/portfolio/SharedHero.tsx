
"use client"
import { SharedHeroProps } from '../../types/portfolio';
import React, { useState } from 'react'; // Import useState



const SharedHero: React.FC<SharedHeroProps> = ({ title, subtitle, isBlogPage }) => {
  const [search, setSearch] = useState("");


 

  return (
    <section className="bg-navbg h-[400px] py-20  flex items-center justify-center text-center text-white w-full ">
      <div className="container mx-auto px-4">
       {title && <h1 className="font-bold  text-4xl md:text-5xl mb-4">{title}</h1>}
        {isBlogPage ? (
          <>
            {/* Show on small screens only */}
            <div className="mt-6  lg:hidden flex justify-center">
              <div className="flex w-full max-w-xl rounded overflow-hidden">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search the blog"
                  className="flex-1 px-4 py-3 bg-slate-800 text-white placeholder-gray-300 focus:outline-none"
                />
                <button className="bg-cyan text-white px-6 text-lg font-medium">
                  Search
                </button>
              </div>
            </div>
          </>
        ) : (
          subtitle && (
            <p
              className= "mt-2 mx-auto  text-xl md:text-2xl"
              
            >
              {subtitle}
            </p>
          )
        )}
      </div>
    </section>
  );
};

export default SharedHero;
