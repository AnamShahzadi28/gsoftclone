
"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaLightbulb, FaCloud, FaShieldAlt, FaChartBar, FaCode, FaCog, FaUsers, FaHandshake, FaTrophy, FaRocket } from 'react-icons/fa';
import Image from "next/image";

const ServicesPage = () => {
  const services = [
    {
      icon: <FaLightbulb size={40} className="text-[#FF6600]" />,
      title: "IT Strategy & Consulting",
      description: "Aligning your technology roadmap with your business objectives.",
    },
    {
      icon: <FaCloud size={40} className="text-[#FF6600]" />,
      title: "Cloud Solutions",
      description: "Leveraging the power of the cloud for scalability and efficiency.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-[#FF6600]" />,
      title: "Cybersecurity",
      description: "Protecting your digital assets with robust security measures.",
    },
    {
      icon: <FaChartBar size={40} className="text-[#FF6600]" />,
      title: "Data Analytics & BI",
      description: "Transforming data into actionable insights for informed decision-making.",
    },
    {
      icon: <FaCode size={40} className="text-[#FF6600]" />,
      title: "Software Development",
      description: "Custom software solutions to meet your unique business needs.",
    },
    {
      icon: <FaCog size={40} className="text-[#FF6600]" />,
      title: "Managed IT Services",
      description: "Proactive IT management and support to keep your systems running smoothly.",
    },
  ];

  const advantages = [
      {
          icon: <FaUsers size={30} className="text-[#FF6600]" />,
          title: "Experienced Team",
          description: "Access to a team of certified and experienced IT professionals."
      },
      {
          icon: <FaHandshake size={30} className="text-[#FF6600]" />,
          title: "Client-Centric Approach",
          description: "Solutions designed specifically around your business goals."
      },
      {
          icon: <FaTrophy size={30} className="text-[#FF6600]" />,
          title: "Proven Track Record",
          description: "A history of successful projects and satisfied clients."
      },
      {
          icon: <FaRocket size={30} className="text-[#FF6600]" />,
          title: "Innovation-Driven",
          description: "Commitment to utilizing the latest technologies to give you a competitive edge."
      }
  ]

  return (
    <div className="bg-white">
      {/* Section 1: Hero Banner */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/services/bgservice.png')" }}
      >
        <div className="absolute inset-0 bg-[#003366] bg-opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Comprehensive IT Consulting and Digital Transformation Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
            Partner with us to leverage cutting-edge technology, streamline operations, and drive business growth.
          </p>
          <div className="mt-10">
            <Button
              as={Link}
              href="/contact"
              radius="sm"
              className="bg-[#FF6600] text-white text-lg font-semibold py-4 px-8 rounded-md hover:bg-opacity-90 transition"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
            Your Strategic Technology Partner
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At GSoft Consulting, we are dedicated to understanding your unique business challenges and opportunities. Our approach is rooted in building long-term partnerships, delivering tailored solutions that not only solve immediate problems but also provide a scalable foundation for future growth. We are committed to excellence in everything we do.
          </p>
        </div>
      </section>

      {/* Section 3: Core Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
              Our Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#003366] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">The GSoft Advantage</h2>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2">
                      <Image src="/images/team-collaboration.jpg" alt="Team Collaboration" width={600} height={400} className="rounded-lg shadow-lg"/>
                  </div>
                  <div className="w-full md:w-1/2">
                      <ul className="space-y-6">
                          {advantages.map((advantage, index) => (
                              <li key={index} className="flex items-start">
                                  <div className="flex-shrink-0 mr-4 mt-1">{advantage.icon}</div>
                                  <div>
                                      <h3 className="text-xl font-bold text-[#003366]">{advantage.title}</h3>
                                      <p className="text-gray-600">{advantage.description}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 5: Final Call-to-Action (CTA) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#003366] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg">
            Let&apos;s discuss how our services can help you achieve your goals.
          </p>
          <div className="mt-8">
            <Button
              as={Link}
              href="/contact"
              radius="sm"
              className="bg-[#FF6600] text-white text-lg font-semibold py-4 px-8 rounded-md hover:bg-opacity-90 transition"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
