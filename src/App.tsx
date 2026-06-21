/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("tech-navigators-theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("tech-navigators-theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans flex flex-col antialiased selection:bg-gold-400 selection:text-navy-950 transition-colors duration-300 ${
      darkMode ? "bg-navy-950 text-slate-100 dark" : "bg-slate-50 text-slate-800"
    }`}>
      {/* Navigation Suite */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Sections flow */}
      <main className="flex-1">
        {/* Home Banner CTA */}
        <Hero />

        {/* Dynamic & Searchable Service Cards menu with WhatsApp Builder */}
        <ServicesSection darkMode={darkMode} />

        {/* Detailed About Us division */}
        <AboutSection />

        {/* Interactive FAQ accordion */}
        <FAQSection darkMode={darkMode} />

        {/* Maps and Telephone Suite */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Detailed Footer list */}
      <Footer darkMode={darkMode} />

      {/* Persistent global floating WhatsApp assistance widget */}
      <FloatingWhatsApp />
    </div>
  );
}

