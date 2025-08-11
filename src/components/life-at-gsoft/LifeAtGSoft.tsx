
import Image from "next/image";

export default function LifeAtGSoft() {
  return (
    <>
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        {/* Top Section - Text + Full Width Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12 items-start">
          {/* Text Section */}
          <div>
            <h2 className="text-sm font-semibold uppercase ">
              Our team
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Life At Gsoft
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
              Life at GSoft is fast-paced and dynamic, with a strong focus on teamwork and collaboration. The company culture is built on a foundation of innovation, creativity, and a passion for technology. The company values work-life balance, and encourages its employees to take time off when needed. The company also offers a range of benefits, including health insurance, retirement savings plans, and paid time off. GSoft also places a strong emphasis on its community, and encourages its employees to get involved in local and charitable events. The company regularly organizes team-building activities and events, and fosters a strong sense of camaraderie among its employees.
            </p>
          </div>

          {/* Top Image */}
          <div className="w-full">
            <Image
              src="/images/team/team1.png"
              alt="Team photo 1"
              width={900}
              height={500}
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>



       
  {/* Left Image (takes full height of the right section) */}
  <div className="w-full h-full">
    <Image
      src="/images/team/team2.png"
      alt="Team photo 2"
      width={800}
      height={600}
      className="w-full h-full object-cover  overflow-hidden"
    />
  </div>

  {/* Right Column: Top full-width + two side-by-side below */}
  <div className="flex flex-col gap-4 h-full ">
    {/* Top Image */}
    <div className="w-full">
      <Image
        src="/images/team/team3.png"
        alt="Team photo 3"
        width={800}
        height={280}
        className="w-full object-cover  overflow-hidden"
      />
    </div>

    {/* Two Side-by-Side Images */}
    <div className="flex gap-4">
      <div className="w-1/2">
        <Image
          src="/images/team/team2.png"
          alt="Team photo 4"
          width={400}
          height={280}
          className="w-full object-cover  overflow-hidden"
        />
      </div>
      <div className="w-1/2">
        <Image
          src="/images/team/team2.png"
          alt="Team photo 5"
          width={400}
          height={280}
          className="w-full object-cover  overflow-hidden"
        />
      </div>
    </div>
  </div>


           {/* Bottom Section - Two Images Side by Side */}
        
          <Image
            src="/images/team/team4.png"
            alt="Team photo 5"
            width={800}
            height={500}
            className="w-full h-full object-cover  overflow-hidden "
          />
          <Image
            src="/images/team/team4.png"
            alt="Team photo 6"
            width={800}
            height={500}
            className="   w-full h-full object-cover  overflow-hidden"
          />



          <Image
            src="/images/team/team4.png"
            alt="Team photo 5"
            width={800}
            height={500}
            className="w-full h-full object-cover  overflow-hidden "
          />
          <Image
            src="/images/team/team4.png"
            alt="Team photo 6"
            width={800}
            height={500}
            className="   w-full h-full object-cove  overflow-hiddenr"
          />


        </div>

       
         
        

    
        
      </div>
    </>
  );
}
