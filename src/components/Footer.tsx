import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Ziada</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#Contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://x.com/ziadadc" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/ziadadc/" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.867 0-2.152 1.459-2.152 2.966v5.701h-3v-11h2.879v1.526h.04c.401-.757 1.379-1.557 2.837-1.557 3.035 0 3.596 1.998 3.596 4.598v6.433z" />
                  </svg>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://web.facebook.com/Ziadadcs?_rdc=1&_rdr#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/ziadadc/" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.691 4.746-4.919 4.919-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.228-.148-4.747-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.692-4.746 4.919-4.919 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.948-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@Ziadadc" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@ziadadc" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.02 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.1-1.24.22-2.48.88-3.55.89-1.43 2.28-2.39 3.88-2.69.24-.05.49-.07.74-.07v4.02c-.24.01-.49.03-.73.09-.83.2-1.59.66-2.14 1.34-.66.82-.99 1.82-.88 2.85.21 2.03 1.99 3.68 4.01 3.89 1.77.18 3.48-.45 4.62-1.64 1.14-1.2 1.77-2.79 1.77-4.46v-9.94c.54.33 1.09.63 1.67.89 1.31.59 2.74.88 4.17.93V24c-1.54-.17-3.12-.68-4.24-1.79-1.12-1.08-1.67-2.64-1.75-4.17.01-2.91-.02-5.83.02-8.75z" />
                  </svg>
                  TikTok
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ziada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;