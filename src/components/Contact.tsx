"use client"
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+971509199750',
      link: 'tel:+971509199750'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'info@ziadadc.com',
      link: 'mailto:info@ziadadc.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Office',
      value: 'Dubai, United Arab Emirates',
      link: '#'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Working Hours',
      value: 'Sun - Thu: 9:00 AM - 6:00 PM',
      link: '#'
    }
  ];

  return (
    <section id="Contact" className="relative py-20 bg-white overflow-hidden">
      <div className="relative container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#1B6A3D] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-[#C21D25] to-[#1B6A3D] bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C21D25] via-[#1B6A3D] to-[#14502E] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your business journey? Contact us today for expert guidance and personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s Start a Conversation</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of experts is ready to help you navigate the complexities of business setup and expansion. 
                Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-50 rounded-2xl border-2 border-gray-100 hover:border-[#1B6A3D]/30 hover:bg-white transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B6A3D]/10 to-[#14502E]/10 border border-[#1B6A3D]/20 flex items-center justify-center text-[#1B6A3D] group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#C21D25]/10 group-hover:to-[#1B6A3D]/10 group-hover:text-[#C21D25] transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-[#14502E] mb-1 group-hover:text-[#1B6A3D] transition-colors duration-300">
                        {item.title}
                      </h4>
                      {item.link.startsWith('#') ? (
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.value}
                        </p>
                      ) : (
                        <a
                          href={item.link}
                          className="text-gray-600 text-sm leading-relaxed hover:text-[#C21D25] transition-colors duration-300 break-all"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="p-8 bg-gradient-to-br from-[#1B6A3D]/5 to-[#14502E]/5 rounded-2xl border border-[#1B6A3D]/10">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Ready to Get Started?</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Schedule a free consultation with our experts to discuss your business needs.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-[#1B6A3D] to-[#14502E] text-white font-semibold rounded-xl hover:from-[#C21D25] hover:to-[#1B6A3D] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#1B6A3D] focus:ring-0 transition-colors duration-300 placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#1B6A3D] focus:ring-0 transition-colors duration-300 placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#1B6A3D] focus:ring-0 transition-colors duration-300 placeholder-gray-400"
                    placeholder="+971 50 123 4567"
                  />
                </div>

                <div className="group">
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#1B6A3D] focus:ring-0 transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="company-formation">Company Formation</option>
                    <option value="investor-visa">Investor Visa</option>
                    <option value="bank-account">Bank Account Opening</option>
                    <option value="tax-registration">Tax Registration</option>
                    <option value="spain-residency">Spain Residency</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#1B6A3D] focus:ring-0 transition-colors duration-300 placeholder-gray-400 resize-none"
                  placeholder="Tell us about your business needs and how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#1B6A3D] to-[#14502E] text-white font-semibold rounded-xl hover:from-[#C21D25] hover:to-[#1B6A3D] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1B6A3D]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C21D25]/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default ContactSection;