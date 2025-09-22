import Image from 'next/image';
import { ServiceCardProps } from '../interfaces/CardInterface';

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => {
  return (
    <div className="relative group h-full">
      {/* Main Card */}
      <div className="relative h-full bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-[#1B6A3D]/30">
        
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1B6A3D]/0 via-[#C21D25]/0 to-[#14502E]/0 group-hover:from-[#1B6A3D]/10 group-hover:via-[#C21D25]/10 group-hover:to-[#14502E]/10 transition-all duration-500 -z-10 blur-xl"></div>
        
        {/* Icon/Image Container */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B6A3D]/10 to-[#14502E]/10 border-2 border-[#1B6A3D]/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#C21D25]/40 group-hover:bg-gradient-to-br group-hover:from-[#C21D25]/10 group-hover:to-[#1B6A3D]/10 transition-all duration-500">
            {image ? (
              <div className="relative w-10 h-10">
                <Image src={image} alt={title} layout="fill" objectFit="contain" />
              </div>
            ) : (
              <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
            )}
          </div>
          
          {/* Floating Particles Effect */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#C21D25] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#1B6A3D] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500" style={{ animationDelay: '200ms' }}></div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#14502E] transition-colors duration-300 leading-tight">
            {title}
          </h3>
          
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#C21D25] to-[#1B6A3D] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gradient-to-r from-[#C21D25] to-[#1B6A3D] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1B6A3D]/5 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Bottom Border Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1B6A3D]/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Enhanced Shadow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B6A3D]/0 to-[#C21D25]/0 group-hover:from-[#1B6A3D]/5 group-hover:to-[#C21D25]/5 rounded-2xl blur-xl -z-20 transition-all duration-500"></div>
    </div>
  );
};