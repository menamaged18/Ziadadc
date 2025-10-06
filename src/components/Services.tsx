"use client";
import React from 'react';
import { ServiceCardProps } from '../interfaces/CardInterface';
import { ServiceCard } from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: 'Company Formation in the UAE',
      description: 'Comprehensive services for company formation in the UAE, from selecting the appropriate type of company to preparing all necessary documents.',
      icon: '🏢',
      image: null,
    },
    {
      title: 'Investor Visa',
      description: 'Obtain an investor visa in the UAE with our integrated services, including tailored consultations, application submissions, and follow-up on all procedures.',
      icon: '🛂',
      image: null,
    },
    {
      title: 'Bank Account',
      description: 'Opening a bank account for your company in the UAE has never been easier. We assist you in selecting the right bank for your needs.',
      icon: '🏦',
      image: null,
    },
    {
      title: 'Company Tax Registration',
      description: 'We provide company tax registration services in the UAE, including assessing tax obligations, preparing documents, and submitting applications.',
      icon: '📑',
      image: null,
    },
    {
      title: 'Spain Residency',
      description: 'Full Spain residency services, handling paperwork, insurance, and family documents—all included for a seamless process.',
      icon: null,
      image: "/Spain-Icon.png",
    },
  ];

  return (
    <section id="Services" className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="relative container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-block">
            <span className="text-[#1B6A3D] text-sm font-semibold tracking-wider uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
               <span className="bg-gradient-to-r from-[#1B6A3D] to-[#14502E] bg-clip-text text-transparent">Our Services</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#C21D25] via-[#1B6A3D] to-[#14502E] rounded-full mx-auto mb-6"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive business solutions tailored to your success in the UAE and beyond
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group opacity-0 translate-y-8 animate-fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
              />
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1B6A3D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C21D25]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#14502E]/3 rounded-full blur-3xl -z-10"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;