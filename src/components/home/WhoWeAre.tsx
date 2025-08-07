
import AnimatedOnScroll from "../../utils/AnimatedOnScroll";

const WhoWeAre = () => {
  return (
    <AnimatedOnScroll  once={false}>
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h6 className="text-2xl   ">
          Who We Are
        </h6>

        <h2   className="text-3xl font-black  mb-4 ">CONSULTANCY. DESIGN. DEVELOPMENT.</h2>

        <p className="text-lg  text-navbg  mb-8">
          Welcome to GSoft! A Leading software development company who is providing modern software solutions and specialized services of Front-End, Back-End and Mobile-App Development along with Open AI and many more. We bring revolution and digital transformation to the journey of your success by excelling various industries and businesses. By staying consistent with cutting-edge technologies and methodologies with a team of 100+ skilled experts, we strive to innovate your growing business model to boost its success and assure 24/7 availability for timely and 100% satisfying customer support. So, be our Partner for highly accountable and reliable Results...
        </p>

       
      </div>
      </section>
    </AnimatedOnScroll>
  );
};

export default WhoWeAre;
