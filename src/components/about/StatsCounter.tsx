"use client";

import Image from "next/image";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { end: 60, text: 'Happy Clients', suffix: '+' },
    { end: 60, text: 'Projects', suffix: '+' },
    { end: 13470, text: 'Hours of Support', suffix: '+' },
    { end: 30, text: 'Talented Gsoftians', suffix: '+' },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4  md:px-32 lg:px-48 py-12 gap-10">
      {/* Image Section (top for sm/md, left for lg+) */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[450px] rounded-xl overflow-hidden">
          <Image
            src="/images/about/person.png"
            alt="Team working"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

   
      <div className="w-full lg:w-1/2 grid  grid-col-1 md:grid-cols-2 gap-y-10 text-center">
      {stats.map((stat, index) => (
  <div key={index}>
    <h2 className="text-4xl md:text-5xl font-bold text-black">
      <CountUp start={0} end={stat.end} duration={3} suffix={stat.suffix} />
    </h2>
    <p className="text-lg font-bold">{stat.text}</p>
  </div>
))}

    </div>
    </div>
  );
}
