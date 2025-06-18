import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const { language, setLanguage, flags } = useLanguage();

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 left-0 z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Left Section - Logo and Company Name */}
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="relative flex items-center justify-center w-10 h-10">
              <MessageCircle
                fill="#2277eb"
                stroke="#2277eb"
                size={40}
                strokeWidth={1.5}
              />
              <span
                className="absolute text-white font-bold"
                style={{
                  fontSize: '20px',
                  lineHeight: '1',
                }}
              >
                H
              </span>
            </div>
            <span className="text-2xl font-bold mb-1">ostpress</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Right Section - Contact Info and Language Selector */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Phone className="text-[var(--text-color)]" size={24} strokeWidth={2} />
            <span className="text-[var(--text-color)]">123-456-12348</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="text-[var(--text-color)]" size={24} strokeWidth={2} />
            <span className="text-[var(--text-color)]">INFO@HOSTPRESS.COM</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={flags[language as keyof typeof flags]}
              alt="flag"
              className="w-5 h-4 object-cover"
            />
            <select
              value={language}
              onChange={(e) => {
                const newLang = e.target.value;
                setLanguage(newLang);
                i18n.changeLanguage(newLang);
              }}
              className="bg-transparent text-[var(--text-color)] border-none focus:outline-none text-sm"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <div className="relative flex items-center justify-center w-10 h-10">
                  <MessageCircle
                    fill="#2277eb"
                    stroke="#2277eb"
                    size={40}
                    strokeWidth={1.5}
                  />
                  <span
                    className="absolute text-white font-bold"
                    style={{
                      fontSize: '20px',
                      lineHeight: '1',
                    }}
                  >
                    H
                  </span>
                </div>
                <span className="text-2xl font-bold mb-1">ostpress</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="text-[var(--text-color)]" size={24} strokeWidth={2} />
                <span className="text-[var(--text-color)]">123-456-12348</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-[var(--text-color)]" size={24} strokeWidth={2} />
                <span className="text-[var(--text-color)]">INFO@HOSTPRESS.COM</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img
                  src={flags[language as keyof typeof flags]}
                  alt="flag"
                  className="w-5 h-4 object-cover"
                />
                <select
                  value={language}
                  onChange={(e) => {
                    const newLang = e.target.value;
                    setLanguage(newLang);
                    i18n.changeLanguage(newLang);
                  }}
                  className="bg-transparent text-[var(--text-color)] border-none focus:outline-none text-sm"
                >
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;