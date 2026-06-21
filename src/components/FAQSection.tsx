import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { faqs } from "../data";
import { WhatsAppLogo } from "./SocialIcons";

interface FAQSectionProps {
  darkMode?: boolean;
}

export default function FAQSection({ darkMode }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className={`py-20 transition-colors duration-300 ${
      darkMode ? "bg-[#0b1b33] text-slate-100 border-t border-white/5" : "bg-white text-slate-800 border-t border-slate-100"
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className={`font-mono text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full ${
            darkMode ? "text-gold-400 bg-white/5 border border-white/10" : "text-navy-800 bg-navy-50"
          }`}>
            COMMON INQUIRIES
          </span>
          <h2 className={`text-3xl sm:text-4xl font-display font-extrabold mt-4 tracking-tight ${
            darkMode ? "text-white" : "text-navy-950"
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-sm sm:text-base mt-2 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Clear guidelines to help you prepare your paperwork and devices before visiting us.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            // Update answer dynamically for call or custom numbers if they match previous hardcoded values
            let displayAnswer = faq.answer;
            if (displayAnswer.includes("+256 750 219 301")) {
              displayAnswer = displayAnswer.replace("+256 750 219 301", "+256 757 808 474");
            }
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? darkMode
                      ? "bg-white/5 border-gold-400/50 shadow-md"
                      : "bg-slate-50/70 border-slate-300/80 shadow-sm"
                    : darkMode
                      ? "bg-navy-950/60 border-white/5 hover:border-white/20"
                      : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-5 py-4 sm:p-6 flex justify-between items-center gap-4 focus:outline-none"
                  id={`faq-trigger-${index}`}
                >
                  <span className={`font-display font-bold text-sm sm:text-base transition-colors flex items-center gap-3 ${
                    darkMode ? "text-white hover:text-gold-300" : "text-navy-950 hover:text-navy-900"
                  }`}>
                    <span className={`p-1 px-1.5 rounded font-mono text-xs shrink-0 select-none ${
                      darkMode ? "bg-white/10 text-gold-300" : "bg-navy-100 text-navy-800"
                    }`}>
                      Q{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className={`p-1 rounded-lg shrink-0 ${
                    darkMode ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500"
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Content Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-80 opacity-100 border-t border-white/5" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className={`px-5 py-4 sm:px-6 sm:py-5 text-sm sm:text-[15px] leading-relaxed font-sans ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {displayAnswer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support callout at bottom */}
        <div className={`mt-12 text-center p-6 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border ${
          darkMode ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200/60"
        }`}>
          <div className="text-left">
            <h4 className={`font-semibold text-sm flex items-center gap-1.5 ${
              darkMode ? "text-white" : "text-navy-950"
            }`}>
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Have a different question?</span>
            </h4>
            <p className={`text-xs ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}>
              We answer fast and give accurate guidelines on government requirements.
            </p>
          </div>
          <a
            href="https://wa.me/256757808474"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-semibold text-xs px-5 py-3 rounded-xl transition-all ${
              darkMode 
                ? "bg-gold-500 text-navy-950 hover:bg-gold-400" 
                : "bg-navy-900 text-white hover:bg-gold-400 hover:text-navy-950"
            }`}
          >
            <WhatsAppLogo className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
