interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Reliable Service',
    description: 'Our platform ensures 99.9% uptime with robust infrastructure.',
  },
  {
    title: 'Fast Support',
    description: '24/7 customer support to assist you whenever you need help.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Grow with us as your needs evolve with our flexible plans.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;