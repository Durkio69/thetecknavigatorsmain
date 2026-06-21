import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { contactInfo } from "../data";
import { WhatsAppLogo } from "./SocialIcons";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show button after scrolling down 200px
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    // Auto active popup tooltip after 5 seconds to invite WhatsApp chats
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 isolate">
      
      {/* Dynamic Invitation Tooltip */}
      {showTooltip && (
        <div className="bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-bounce bottom-20 right-0 mr-1 text-xs relative flex items-start gap-2.5">
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <p className="font-bold text-navy-950 font-display">The Tech Navigators</p>
            </div>
            <p className="text-slate-600 font-sans leading-tight">
              Hello! Tap here to submit files, check result slips, or ask about National ID/Passport forms.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-0.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition self-start"
            aria-label="Dismiss tooltip"
            id="dismiss-whatsapp-tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          {/* Triangle bubble helper tip */}
          <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-white border-b border-r border-slate-100 transform rotate-45" />
        </div>
      )}

      {/* Floating Circle Button with Original WhatsApp Vector Logo */}
      <a
        href="https://wa.me/256757808474"
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/35 transition-all active:scale-95 group flex items-center justify-center animate-pulse"
        title="Chat on WhatsApp"
        aria-label="WhatsApp main trigger"
        id="global-floating-whats-app"
      >
        {/* Breathing Ripple pulse ring */}
        <span className="absolute inset-0 rounded-full border-4 border-[#25D366]/20 animate-ping -z-10" />
        
        <WhatsAppLogo className="w-6.5 h-6.5 text-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
