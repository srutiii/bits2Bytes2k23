import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-10 mb-10 bg-cust-color shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-violet-300 text-xl font-bold font-custom-sans">
            BITS2BYTES 2K23
          </Link>
          <div className="-mr-2 flex 950px:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-violet-700/30 focus:outline-none transition-all duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden 950px:flex items-center">
            <Link
              to="/principal"
              className="text-violet-300 hover:translate-y-[-0.4em] px-3 py-2 font-medium transition-all duration-200 tracking-widest"
            >
              PRINCIPAL'S MESSAGE
            </Link>
            <Link
              href="/events"
              className="text-violet-300 hover:translate-y-[-0.4em] px-3 py-2 font-medium transition-all duration-200 tracking-widest"
            >
              EVENTS
            </Link>
            <Link
              href="/crew"
              className="text-violet-300 hover:translate-y-[-0.4em] px-3 py-2 font-medium transition-all duration-200 tracking-widest"
            >
              CREW
            </Link>
            <Link
              href="/contact"
              className="text-violet-300 hover:translate-y-[-0.4em] px-3 py-2 font-medium transition-all duration-200 tracking-widest"
            >
              CONTACT US
            </Link>
            <Link
              href="/form" 
              className="text-violet-300 hover:translate-y-[-0.4em] px-3 py-2 font-medium transition-all duration-200 tracking-widest"
            >
              LOGIN/SIGNUP
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="shadow-lg 950px:hidden w-full absolute bg-cust-color">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/principal"
              className="text-violet-300 hover:bg-violet-700/30 hover:shadow-sm block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 tracking-widest"
            >
              PRINCIPAL'S MESSAGE
            </Link>
            <a
              href="/events"
              className="text-violet-300 hover:bg-violet-700/30 hover:shadow-sm block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 tracking-widest"
            >
              EVENTS
            </a>
            <a
              href="/crew"
              className="text-violet-300 hover:bg-violet-700/30 hover:shadow-sm block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 tracking-widest"
            >
              CREW
            </a>
            <a
              href="/you"
              className="text-violet-300 hover:bg-violet-700/30 hover:shadow-sm block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 tracking-widest"
            >
              CONTACT US
            </a>
            <a
              href="/form"
              className="text-violet-300 hover:bg-violet-700/30 hover:shadow-sm block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 tracking-widest"
            >
              LOGIN/SIGNUP
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
