import React from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { contactInfo } from "../data";
import { WhatsAppLogo } from "./SocialIcons";

interface ContactSectionProps {
  darkMode?: boolean;
}

export default function ContactSection({ darkMode }: ContactSectionProps) {
  const mapIframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.03058742217!2d32.610813735160896!3d0.32356507421115857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb13b730ca75%3A0xb3de2d54effaae61!2sMbuya%2C%20Kampala!5e0!3m2!1sen!2sug!4v1718960000000!5m2!1sen!2sug";

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 scroll-mt-12 ${
      darkMode ? "bg-[#0b1b33] text-slate-100" : "bg-slate-50 text-slate-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className={`font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full ${
            darkMode ? "text-gold-400 bg-white/5 border border-white/10" : "text-navy-800 bg-navy-100"
          }`}>
            REACH OUT & VISIT US
          </span>
          <h2 className={`text-3xl sm:text-4xl font-display font-extrabold mt-4 tracking-tight ${
            darkMode ? "text-white" : "text-navy-950"
          }`}>
            How to Reach The Tech Navigators
          </h2>
          <p className={`text-base sm:text-lg mt-3 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}>
            Have questions about fees or documents? Give us a call, write a WhatsApp message, or step right into our kiosk in Mbuya today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Contact Channels Details - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Main Contact details container */}
            <div className={`rounded-2xl p-6 sm:p-8 border shadow-sm space-y-6 ${
              darkMode ? "bg-navy-950/60 border-white/5" : "bg-white border-slate-200"
            }`}>
              <h3 className={`font-display font-bold text-xl flex items-center gap-2 ${
                darkMode ? "text-white" : "text-navy-950"
              }`}>
                <span>Visit Us Today!</span>
              </h3>
              
              <p className={`text-sm leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}>
                We are conveniently located in the Mbuya business neighborhood, Nakawa, of Kampala, Uganda. Bring your mobile phones, laptops, and application sheets for immediate processing.
              </p>

              {/* Call Channels */}
              <div className="space-y-3 pt-2">
                <span className="block text-xs font-semibold text-slate-450 font-mono tracking-wider uppercase">
                  📞 Phone Calls Support (Direct Support)
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${contactInfo.phoneNumbers[0].replace(/\s+/g, "")}`}
                    className={`flex items-center justify-between border p-3.5 rounded-xl font-semibold text-sm transition-all ${
                      darkMode
                        ? "border-white/5 hover:border-gold-400 bg-white/5 hover:bg-white/10 text-white"
                        : "border-slate-100 hover:border-gold-400 bg-slate-50/60 hover:bg-white text-navy-950"
                    }`}
                    id="call-channel-lnk-1"
                  >
                    <span className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-gold-400" />
                      <span>{contactInfo.phoneNumbers[0]}</span>
                    </span>
                    <span className="text-xs text-gold-400 font-bold hover:underline">Tap to Call</span>
                  </a>

                  <a
                    href={`tel:${contactInfo.phoneNumbers[1].replace(/\s+/g, "")}`}
                    className={`flex items-center justify-between border p-3.5 rounded-xl font-semibold text-sm transition-all ${
                      darkMode
                        ? "border-white/5 hover:border-gold-400 bg-white/5 hover:bg-white/10 text-white"
                        : "border-slate-100 hover:border-gold-400 bg-slate-50/60 hover:bg-white text-navy-950"
                    }`}
                    id="call-channel-lnk-2"
                  >
                    <span className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-gold-400" />
                      <span>{contactInfo.phoneNumbers[1]}</span>
                    </span>
                    <span className="text-xs text-gold-400 font-bold hover:underline">Tap to Call</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Channels */}
              <div className="space-y-3">
                <span className="block text-xs font-semibold text-slate-450 font-mono tracking-wider uppercase">
                  💬 WhatsApp Chats & Document uploads
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://wa.me/256757808474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/15 p-3.5 rounded-xl text-emerald-400 font-bold text-sm transition-all"
                    id="whats-channel-lnk-1"
                  >
                    <span className="flex items-center gap-2.5 text-emerald-400">
                      <WhatsAppLogo className="w-4.5 h-4.5 text-[#25D366]" />
                      <span>{contactInfo.whatsAppNumbers[1]}</span>
                    </span>
                    <span className="text-xs text-emerald-400 font-bold">Standard Chat Line</span>
                  </a>

                  <a
                    href="https://wa.me/256757808474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between border p-3.5 rounded-xl font-semibold text-sm transition-all ${
                      darkMode
                        ? "border-white/5 hover:border-emerald-400/50 bg-white/5 hover:bg-white/10 text-slate-300"
                        : "border-slate-100 hover:border-emerald-400/50 bg-slate-50/60 hover:bg-white text-slate-800"
                    }`}
                    id="whats-channel-lnk-2"
                  >
                    <span className="flex items-center gap-2.5">
                      <WhatsAppLogo className="w-4.5 h-4.5 text-slate-400" />
                      <span>{contactInfo.whatsAppNumbers[1]}</span>
                    </span>
                    <span className="text-xs text-slate-400">Alternative Support</span>
                  </a>
                </div>
              </div>

              {/* Email and Geography */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-400 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-450 font-mono tracking-wider uppercase">Email address</span>
                    <a href={`mailto:${contactInfo.email}`} className={`text-sm font-semibold hover:underline ${
                      darkMode ? "text-white" : "text-navy-950"
                    }`}>
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-450 font-mono tracking-wider uppercase">Physical Location</span>
                    <span className={`text-sm font-semibold ${
                      darkMode ? "text-white" : "text-navy-950"
                    }`}>
                      {contactInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-450 font-mono tracking-wider uppercase">Working Hours</span>
                    <span className={`text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {contactInfo.hours}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Callout box of quick promo reminder */}
            <div className="bg-navy-950 text-white rounded-2xl p-6 border border-navy-800 shadow relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-20 h-20 bg-gold-400/5 rounded-full blur" />
              <h4 className="font-display font-bold text-base text-gold-300 mb-1">
                Have an urgent document to print?
              </h4>
              <p className="text-xs text-slate-300 mb-3 font-sans">
                Send it to us directly via WhatsApp and specify binding or lamination style. We will run it off immediately.
              </p>
              <a
                href="https://wa.me/256757808474"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-white font-bold transition-all"
              >
                <span>Upload PDF now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right: Map Embed Iframe Container - 7 Columns */}
          <div className="lg:col-span-7 flex flex-col">
            <div className={`rounded-2xl p-4 border shadow-sm flex-1 flex flex-col min-h-[350px] lg:min-h-full ${
              darkMode ? "bg-navy-950/60 border-white/5" : "bg-white border-slate-200"
            }`}>
              
              {/* Maps Header bar */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/5 mb-4 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1.5 uppercase tracking-wide font-semibold text-[11px] text-slate-300">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Google Maps: Mbuya, Kampala</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Mbuya+Kampala+Nakawa+Wakiso+Kawempe+Northen Uganda+Eastern Uganda+Western Uganda+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white text-gold-400"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe Wrapper */}
              <div className={`flex-1 rounded-xl overflow-hidden relative border min-h-[300px] ${
                darkMode ? "bg-navy-900 border-white/5" : "bg-slate-100 border-slate-200/50"
              }`}>
                <iframe
                  src={mapIframeSrc}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Tech Navigators Mbuya Location Map"
                  id="google-maps-iframe"
                />
              </div>

              {/* Direction text info */}
              <div className="pt-3 px-2 text-xs text-slate-405 flex items-center gap-2">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-400" />
                <span className="font-sans">We serve customers from <strong>Mbuya, Nakawa, Bugolobi, Mutungo, Kitintale</strong>, and the surrounding Kampala Capital districts.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
