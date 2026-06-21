import React from "react";
import { Award, Compass, ThumbsUp } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: <Compass className="w-5 h-5 text-gold-400" />,
      title: "Guided E-Applications",
      desc: "Portals like NIRA, URA, and URSB can be highly complex. Our staff guide you securely through every screen of your request.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold-400" />,
      title: " Kampala High Standards",
      desc: "Whether you need embassy-standard visa applications, high-density glossy card formats, or resume writing, we set the benchmark.",
    },
    {
      icon: <ThumbsUp className="w-5 h-5 text-gold-400" />,
      title: "Transparent & Friendly Rate",
      desc: "Accessible and budget-friendly for youth, students, and startups. We never hold hidden service fees or charges.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative gradient sphere */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-navy-900/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Beautifully styled Copy Card */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-bold bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              WHO WE ARE
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Bridging Technology with Personalized Support
            </h2>
            
            {/* The core provided about quote */}
            <div className="p-6 bg-gradient-to-r from-navy-900 to-navy-800/60 border-l-4 border-gold-400 rounded-r-xl shadow-lg">
              <p className="text-base sm:text-lg text-slate-100 font-sans italic leading-relaxed">
                "The Tech Navigators is a trusted digital services kiosk in Mbuya, Nakawa, helping individuals and small businesses across Kampala access government services, printing, design, and tech support — all in one place."
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We understand that modern services are moving online, but not everyone has high-speed internet, a computer, credit card, or the tech knowledge required. Located in Mbuya trading zone, we fill this gap, offering reliable printouts, digital application checks, phone unlock recovery, and custom invitations without the stress.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left">
              <div className="p-4 bg-navy-900/60 rounded-xl border border-navy-800">
                <span className="block font-display font-extrabold text-2xl text-gold-400">8:00 AM – 8:00 PM</span>
                <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Open Hours Mon - Sat</span>
              </div>
              <div className="p-4 bg-navy-900/60 rounded-xl border border-navy-800">
                <span className="block font-display font-extrabold text-2xl text-gold-400">100% Mobile Ready</span>
                <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Order via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Value pillars */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-semibold text-slate-400 font-mono tracking-widest uppercase mb-4">
              WHY KAMPALANS CHOOSE THE TECH NAVIGATORS:
            </h3>
            
            <div className="space-y-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-navy-900/40 hover:bg-navy-900/60 transition-colors border border-navy-800/60 rounded-2xl"
                >
                  <div className="p-2.5 bg-navy-850 rounded-xl max-h-min text-gold-400 shadow-md">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">
                      {v.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
