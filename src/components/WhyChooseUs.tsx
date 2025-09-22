import React from 'react';
import { FaShieldAlt, FaHeadset, FaChartLine } from 'react-icons/fa'; // Example icons

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Reliable Service',
    description: 'Our platform ensures 99.9% uptime with robust infrastructure.',
    icon: <FaShieldAlt />,
  },
  {
    title: 'Fast Support',
    description: '24/7 customer support to assist you whenever you need help.',
    icon: <FaHeadset />,
  },
  {
    title: 'Scalable Solutions',
    description: 'Grow with us as your needs evolve with our flexible plans.',
    icon: <FaChartLine />,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#14502E] mb-4 text-center">
          Why Choose Us
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          We are committed to providing an exceptional experience with a focus on
          reliability, speed, and growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 text-3xl text-[#1B6A3D]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#1B6A3D] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;