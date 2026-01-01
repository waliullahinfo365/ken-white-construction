import React, { useState } from 'react';
import { PromoBar } from './PromoBar';
import { Phone, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="relative flex items-end pb-3 sm:pb-4">
              <div className="relative">
                <span className="text-white font-heading text-sm sm:text-lg font-bold italic tracking-wide">
                  KEN
                </span>
                <span className="absolute left-0 right-0 bottom-[-6px] sm:bottom-[-8px] h-[2px] sm:h-[3px] bg-primary-500"></span>
                <span className="absolute left-0 right-0 bottom-[-10px] sm:bottom-[-13px] h-[1px] sm:h-[2px] bg-white"></span>
              </div>
              
              <span className="text-white font-heading text-2xl sm:text-4xl font-black italic tracking-wide mx-2 sm:mx-3 -mb-1">
                WHITE
              </span>
              
              <div className="relative hidden sm:block">
                <span className="text-white font-heading text-lg font-bold italic tracking-wider">
                  CONSTRUCTION
                </span>
                <span className="absolute left-0 right-0 bottom-[-8px] h-[3px] bg-primary-500"></span>
                <span className="absolute left-0 right-0 bottom-[-13px] h-[2px] bg-white"></span>
              </div>
            </div>
          </a>

          {/* Center Promo - Desktop only */}
          <div className="hidden lg:flex flex-1 justify-center">
            <PromoBar />
          </div>

          {/* Call Now - Desktop */}
          <a href="tel:+16138395460" className="hidden md:flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-500 flex items-center justify-center">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <div className="text-left">
              <p className="text-primary-500 font-heading text-xs sm:text-sm font-bold italic uppercase tracking-wide">
                Call Now
              </p>
              <p className="text-white text-sm sm:text-lg">
                +1 (613) 839-5460
              </p>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-gray-700">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-primary-500 transition-colors py-2 text-lg"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+16138395460"
              className="bg-primary-500 text-dark-900 font-bold px-6 py-3 rounded-lg text-center mt-2"
            >
              Call Now: +1 (613) 839-5460
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
