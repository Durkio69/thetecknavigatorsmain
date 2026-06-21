import React from "react";
import { ShieldCheck, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { WhatsAppLogo } from "./SocialIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-36 pb-16 bg-navy-950 text-white flex items-center overflow-hidden"
    >
      {/* Decorative ambient background overlays suitable for a clean tech theme */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-[140px]" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - 7 Columns on desktop */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            
            {/* 10% OFF PROMINENT BADGE / BANNER */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/10 to-gold-400/10 border border-gold-400/30 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-gold-300 animate-pulse">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>LIMITED PROMOTION:</span>
              <span className="bg-red-600 px-2 py-0.5 rounded text-white text-[10px] uppercase font-extrabold">
                10% OFF
              </span>
              <span>Your First Service! Just mention this website!</span>
            </div>

            {/* Headline and Subheadline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] text-white">
              Fast & Easy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500">
                Digital Services
              </span> <br />
              <span className="relative">
                — No Stress!
                <span className="absolute left-0 bottom-1 w-full h-1.5 bg-gold-400/40 rounded-full"></span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed">
              We help you access essential government and digital services quickly, securely, and without hassle. No more long queues or complicated forms.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/256757808474"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-emerald-900/20 active:scale-[0.98] transition-all group lg:min-w-[240px]"
                id="hero-whatsapp-cta"
              >
                <WhatsAppLogo className="w-5 h-5 group-hover:scale-110 transition-transform shrink-0" />
                <span>Message on WhatsApp</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-slate-200 hover:text-white font-medium text-base py-4 px-8 rounded-xl border border-navy-700 hover:border-slate-500 transition-all"
              >
                <span>View Our Services</span>
              </a>
            </div>

            {/* Trust Badges for the customer base in Kampala */}
            <div className="grid grid-cols-3 gap-4 pt-6 md:pt-10 border-t border-navy-800/80">
              <div className="flex items-start gap-2.5">
                <div className="p-1 px-1.5 rounded-lg bg-navy-900 border border-navy-800 text-gold-400 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-100 font-display">100% Secure</h4>
                  <p className="text-xs text-slate-400">Strict privacy & data safety</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 px-1.5 rounded-lg bg-navy-900 border border-navy-800 text-gold-400 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-100 font-display">Fast Setup</h4>
                  <p className="text-xs text-slate-400">Skip the tiring wait lists</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 px-1.5 rounded-lg bg-navy-900 border border-navy-800 text-gold-400 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-100 font-display">Reliable</h4>
                  <p className="text-xs text-slate-400">Experienced Uganda guides</p>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Kiosk Poster Panel / Graphic - 5 Columns on desktop */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col items-center">
            
            {/* Professional Polish - 10% OFF ROTATED CIRCLE BADGE */}
            <div className="absolute -top-10 -right-6 z-20 hidden sm:block">
              <div className="bg-gold-400 w-32 h-32 rounded-full flex flex-col items-center justify-center text-[#002147] border-4 border-white shadow-2xl rotate-12 transform hover:rotate-3 transition-transform duration-300">
                <span className="font-sans font-black text-xl tracking-tight leading-none">GET</span>
                <span className="font-display font-black text-4.5xl leading-none my-0.5">10%</span>
                <span className="font-sans font-black text-xl tracking-tight leading-none uppercase">OFF</span>
              </div>
              <p className="text-center mt-2 font-bold text-gold-300 text-[10px] uppercase tracking-widest bg-navy-950/80 px-2 py-0.5 rounded border border-navy-800">
                First Booking!
              </p>
            </div>

            <div className="relative w-full max-w-md p-6 sm:p-8 bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-800 shadow-2xl rounded-2xl">
              
              {/* Gold border decorative line on top card */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-gold-400 to-red-500 rounded-t-2xl" />

              {/* Tagline Badge */}
              <div className="mb-4 inline-block px-3 py-1 rounded bg-navy-900/60 border border-gold-400/20 text-[11px] font-semibold text-gold-300 tracking-widest uppercase">
                THE TECH NAVIGATORS • KAMPALA
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2 leading-snug">
                Your Trustworthy Local Digital Assistant
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                We are legally established in <strong>Mbuya, Nakawa</strong> to offer affordable support for individuals, students, templates, job seekers, and business owners in Uganda.
              </p>

              {/* Promo Highlight Container */}
              <div className="p-5 rounded-xl bg-gold-400/10 border border-gold-400/30 text-left relative overflow-hidden mb-6">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gold-400/10 rounded-full blur-xl" />
                <h4 className="font-extrabold text-gold-300 text-lg mb-1 flex items-center gap-1.5">
                  <span>✨ Promo Coupon</span>
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Mention <span className="text-white font-semibold">"TECHNAVIGATORS10"</span> when visiting us or via WhatsApp to instantly activate your <strong>10% Discount</strong> on scanning, document drafts, business registration setup fees, or computer optimization services.
                </p>
              </div>

              {/* Simple illustrative list of top items */}
              <div className="space-y-3">
                <p className="text-xs text-slate-400 font-mono tracking-wider uppercase font-medium">
                  POPULAR OFFERS & SERVICES
                </p>
                <ul className="space-y-2 text-sm text-slate-200 font-medium">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>NIRA Passport & National ID Help</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>TIN (URA) Registration Help</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>Mobile Phone FRP/Screen Unlocking</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>Instant high quality printouts in Mbuya</span>
                  </li>
                </ul>
              </div>

              {/* Status Indicator */}
              <div className="mt-8 pt-4 border-t border-navy-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Walk-in status:</span>
                <span className="flex items-center gap-1.5 font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Kiosk Operational / Open
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
