import React from 'react';
import Head from 'next/head';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Ziada Company</title>
        <meta name="description" content="Discover Ziada Company, your trusted partner for establishing and expanding businesses in the UAE and globally." />
      </Head>

      {/* Main Content */}
    <section 
      id="about"
      className="py-18 bg-gray-50 max-w-7xl mx-auto"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left column for text content */}
          <div className="md:flex-1">
            <h2 className="text-3xl font-bold text-[#14502e] mb-6">About Ziada</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Ziada Company specializes in establishing companies in the UAE and opening branches for businesses worldwide. With a team of highly experienced professionals, we are dedicated to helping you set up and expand your business in the Emirates.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Ziada Company, we stand by your side to ensure your business grows significantly, enabling you to invest and collaborate with others easily and efficiently.
            </p>
          </div>
          
          {/* Right column for image */}
          <div className="md:flex-1">
            <div className="relative h-96 rounded-lg shadow-xl overflow-hidden">
              <img
                src="/AboutUs.jpg" 
                alt="UAE Business Growth"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Call to Action will be used later */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#14502e] mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Partner with Ziada Company to take your business to new heights in the UAE and beyond.
          </p>
          <Link
            // href="/contact"
            href="/"
            className="inline-block bg-[#c21d25] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#a11820] transition"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}
    </>
  );
};

export default AboutPage;