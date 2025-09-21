import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="#why-choose-us" className="hover:text-blue-400">Why Us</Link></li>
              <li><Link href="#faqs" className="hover:text-blue-400">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400">Twitter</Link></li>
              <li><Link href="#" className="hover:text-blue-400">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Ziada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;