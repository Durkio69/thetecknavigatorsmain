import React from "react";
import { Sparkles, MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactInfo } from "../data";
import { WhatsAppLogo, InstagramLogo, FacebookLogo, XLogo } from "./SocialIcons";

interface FooterProps {
  darkMode?: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`text-slate-300 pt-16 pb-8 border-t-4 border-gold-400 font-sans transition-colors duration-300 ${
      darkMode ? "bg-[#00132b]" : "bg-[#002147]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info - 5 Columns */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 shrink-0 bg-gold-400 rounded-full overflow-hidden border-2 border-gold-400 shadow-md group-hover:border-gold-300 transition-all flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAH21ZfBbW1u5Tfxvx6-b3ogsUTgj1oH3-NJYSSCmpR37hpqXSlSJlGKWVCcoQbGdXlyOnKTcmgxcR2Ameh2OHhoxVDG0NrYdmBHp17bZ2R1n8fJtkmxOy0dQuGTR9rlZTYBWFbozrhIPEAd=w203-h304-k-no"
                  alt="The Tech Navigators Store"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  THE TECH NAVIGATORS
                </span>
                <p className="text-[10px] text-gold-400 font-mono tracking-widest uppercase font-semibold">
                  Simple. Fast. Reliable.
                </p>
              </div>
            </a>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-sans">
              Your trustworthy digital partner kiosk in <strong>Mbuya, Nakawa, Kampala</strong>. We assist individuals, job applicants, students, and small businesses with e-government submissions, hardware repair, printing, and branding graphics.
            </p>
            {/* National colors thematic line (Uganda Flag Theme Accent) */}
            <div className="flex gap-1 h-1.5 w-24 rounded-full overflow-hidden mt-4 shadow-sm">
              <span className="bg-black w-1/3" />
              <span className="bg-yellow-400 w-1/3" />
              <span className="bg-red-600 w-1/3" />
            </div>
          </div>

          {/* Col 2: Shortcuts - 3 Columns */}
          <div className="md:col-span-3 space-y-3 col-span-1">
            <h4 className="text-xs font-semibold text-white font-mono tracking-widest uppercase pb-1 border-b border-white/10 w-max">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-gold-400 transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Our Service Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  About Our Kiosk
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Summary - 4 Columns */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white font-mono tracking-widest uppercase pb-1 border-b border-white/10 w-max">
              Visit The Kiosk
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="font-sans">Mbuya, Nakawa, Kampala, Uganda</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="font-sans">
                  Call: <a href={`tel:${contactInfo.phoneNumbers[0].replace(/\s+/g, "")}`} className="font-semibold underline hover:text-gold-400 transition-colors">{contactInfo.phoneNumbers[0]}</a> <br />
                  WhatsApp: <a href="https://wa.me/256757808474" target="_blank" rel="noreferrer" className="underline hover:text-gold-400 transition-colors">{contactInfo.whatsAppNumbers[1]}</a>
                </span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="font-sans">{contactInfo.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & socials row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-sans">
          <div>
            <p>© {currentYear} The Tech Navigators. All rights reserved.</p>
            <p className="mt-1 text-slate-400/80">
              Dedicated to simplicity and reliability in access to internet resources across Uganda.
            </p>
          </div>

          {/* Real Social Media Accounts with Original Branding SVGs */}
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 shrink-0">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-white font-mono mr-1">SOCIALS:</span>
            <a
              href="https://wa.me/256757808474"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-[#25D366] hover:scale-115 transition-transform"
            >
              <WhatsAppLogo className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/durkio.69"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-[#E1306C] hover:scale-115 transition-transform"
            >
              <InstagramLogo className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/durkio.69"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-[#1877F2] hover:scale-115 transition-transform"
            >
              <FacebookLogo className="w-5 h-5" />
            </a>
            <a
              href="https://www.x.com/durkio_69"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="text-white hover:text-slate-300 hover:scale-115 transition-transform"
            >
              <XLogo className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
