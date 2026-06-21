import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { contactInfo } from "../data";
import { WhatsAppLogo, InstagramLogo, FacebookLogo, XLogo } from "./SocialIcons";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 border-b-4 border-gold-400 shadow-xl py-2 backdrop-blur-md"
          : "bg-[#002147]/95 backdrop-blur-md py-4 border-b-4 border-gold-400 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Google Maps Website Storefront Icon */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 shrink-0 bg-gold-400 rounded-full overflow-hidden border-2 border-gold-400 shadow-md group-hover:border-gold-300 transition-all flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAH21ZfBbW1u5Tfxvx6-b3ogsUTgj1oH3-NJYSSCmpR37hpqXSlSJlGKWVCcoQbGdXlyOnKTcmgxcR2Ameh2OHhoxVDG0NrYdmBHp17bZ2R1n8fJtkmxOy0dQuGTR9rlZTYBWFbozrhIPEAd=w203-h304-k-no"
                alt="The Tech Navigators Store"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg md:text-xl text-white tracking-tight">
                  THE TECH NAVIGATORS
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-red-600 text-white tracking-wider animate-pulse font-mono uppercase">
                  Mbuya
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans tracking-widest uppercase font-medium">
                Simple. Fast. Reliable.
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links & Controls */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-gold-300 px-2 py-2 text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-gold-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}

            {/* Social Icons row (original icons) */}
            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              <a
                href="https://wa.me/256757808474"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="text-[#25D366] hover:scale-110 transition-transform"
              >
                <WhatsAppLogo className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/durkio.69"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[#E1306C] hover:scale-110 transition-transform"
              >
                <InstagramLogo className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/durkio.69"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-[#1877F2] hover:scale-110 transition-transform"
              >
                <FacebookLogo className="w-5 h-5" />
              </a>
              <a
                href="https://www.x.com/durkio_69"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="text-white hover:text-slate-300 hover:scale-110 transition-transform"
              >
                <XLogo className="w-4.5 h-4.5" />
              </a>
            </div>

            {/* Dark mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none ml-2"
              aria-label="Toggle Dark Mode"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5 text-gold-300" />}
            </button>

            {/* Call Action Button */}
            <a
              href={`tel:${contactInfo.phoneNumbers[0].replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-400 to-amber-500 text-navy-950 px-4 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/10"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Right Bar: DarkMode & Menu Toggles */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Dark Mode Icon for mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/15 transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5 text-gold-300" />}
            </button>

            {/* Mobile hamburger menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-6 space-y-1 bg-navy-950 border-t border-navy-800 shadow-xl px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-navy-800 transition-all border-l-4 border-transparent hover:border-gold-400"
            >
              {link.name}
            </a>
          ))}

          {/* Social icons row for mobile view */}
          <div className="flex items-center justify-around py-4 border-y border-navy-800/80 my-4">
            <a
              href="https://wa.me/256757808474"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-1.5 text-slate-300 hover:text-[#25D366]"
            >
              <WhatsAppLogo className="w-6 h-6 text-[#25D366]" />
              <span className="text-[10px] font-mono">WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/durkio.69"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-1.5 text-slate-300 hover:text-[#E1306C]"
            >
              <InstagramLogo className="w-6 h-6 text-[#E1306C]" />
              <span className="text-[10px] font-mono">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/durkio.69"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-1.5 text-slate-300 hover:text-[#1877F2]"
            >
              <FacebookLogo className="w-6 h-6 text-[#1877F2]" />
              <span className="text-[10px] font-mono">Facebook</span>
            </a>
            <a
              href="https://www.x.com/durkio_69"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-1.5 text-slate-300 hover:text-white"
            >
              <XLogo className="w-5.5 h-5.5 text-white" />
              <span className="text-[10px] font-mono">X / Twitter</span>
            </a>
          </div>

          <div className="pt-2 pb-2 px-4 space-y-3">
            <p className="text-xs text-slate-400 font-mono tracking-widest uppercase text-center">
              REACH OUT DIRECTLY
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${contactInfo.phoneNumbers[0].replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 bg-navy-800 text-white border border-navy-700 py-3 rounded-lg text-sm font-semibold tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Main: {contactInfo.phoneNumbers[0]}</span>
              </a>
              <a
                href="https://wa.me/256757808474"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg text-sm font-semibold tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                <WhatsAppLogo className="w-5 h-5 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
