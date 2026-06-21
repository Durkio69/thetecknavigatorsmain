import React, { useState, useMemo } from "react";
import {
  Search,
  Building2,
  Printer,
  Briefcase,
  Cpu,
  Palette,
  CheckCircle2,
  Sparkles,
  Info,
  ArrowRight,
  X
} from "lucide-react";
import { serviceCategories } from "../data";
import { ServiceItem } from "../types";
import { WhatsAppLogo } from "./SocialIcons";

// Category Header Icon Resolver
function CategoryIcon({ name, className = "w-6 h-6 text-gold-400" }: { name: string; className?: string }) {
  switch (name) {
    case "Government":
      return <Building2 className={className} />;
    case "Printer":
      return <Printer className={className} />;
    case "Briefcase":
      return <Briefcase className={className} />;
    case "Repair":
      return <Cpu className={className} />;
    case "Palette":
      return <Palette className={className} />;
    default:
      return <Building2 className={className} />;
  }
}

interface ServicesSectionProps {
  darkMode?: boolean;
}

export default function ServicesSection({ darkMode }: ServicesSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Inquiry Builder State
  const [inquiryServiceId, setInquiryServiceId] = useState("");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryCustomDetails, setInquiryCustomDetails] = useState("");

  // Gather flat list of all services for search results & inquiry dropdown
  const allServicesFlatList = useMemo(() => {
    const list: { category: string; service: ServiceItem }[] = [];
    serviceCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        list.push({ category: cat.title, service: item });
      });
    });
    return list;
  }, []);

  // Filter service categories and service items based on selection & searchQuery
  const filteredCategories = useMemo(() => {
    let result = serviceCategories;

    // Apply category filter if active
    if (selectedCategoryId !== "all") {
      result = serviceCategories.filter((cat) => cat.id === selectedCategoryId);
    }

    // Apply search query filter if active
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result
        .map((cat) => {
          const matchedItems = cat.items.filter((item) => {
            const matchesName = item.name.toLowerCase().includes(q);
            const matchesDesc = item.description?.toLowerCase().includes(q);
            const matchesDetails = item.details?.some((d) => d.toLowerCase().includes(q));
            return matchesName || matchesDesc || matchesDetails;
          });

          return {
            ...cat,
            items: matchedItems,
          };
        })
        .filter((cat) => cat.items.length > 0);
    }

    return result;
  }, [selectedCategoryId, searchQuery]);

  // Handle WhatsApp message generation for Inquiry builder
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = allServicesFlatList.find((x) => x.service.id === inquiryServiceId)?.service.name || "General Digital Services Inquiry";
    
    // Construct rich text message
    let messageText = `Hello The Tech Navigators! I would like to make an inquiry.\n\n`;
    messageText += `*Requested Service:* ${serviceName}\n`;
    if (inquiryName.trim()) {
      messageText += `*My Name:* ${inquiryName.trim()}\n`;
    }
    if (inquiryCustomDetails.trim()) {
      messageText += `*My Requirements:* ${inquiryCustomDetails.trim()}\n`;
    }
    messageText += `\n(Sent from the kiosk website recommendation)`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/256757808474?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  // Quick inquiry for a specific service clicked in the list
  const triggerQuickInquiry = (service: ServiceItem) => {
    setInquiryServiceId(service.id);
    setInquiryName("");
    setInquiryCustomDetails("");
    const element = document.getElementById("inquiry-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className={`py-20 transition-colors duration-300 ${
      darkMode ? "bg-[#0b1b33] text-slate-100" : "bg-slate-50 text-slate-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className={`font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full ${
            darkMode ? "text-gold-400 bg-white/5 border border-white/10" : "text-navy-800 bg-navy-100"
          }`}>
            OUR COMPREHENSIVE MENU
          </span>
          <h2 className={`text-3xl sm:text-4xl font-display font-extrabold mt-4 tracking-tight ${
            darkMode ? "text-white" : "text-navy-950"
          }`}>
            How Can We Assist You Today?
          </h2>
          <p className={`text-base sm:text-lg mt-3 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}>
            Explore our professional solutions across government processes, computer repair, lamination writing, design work, and job application support.
          </p>
        </div>

        {/* Search Bar & Category Navigation Controls */}
        <div className={`p-4 sm:p-6 rounded-2xl shadow-md border mb-12 transition-all ${
          darkMode ? "bg-navy-950 border-white/5" : "bg-white border-slate-200/60"
        }`}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. NIRA, TIN, Resume, Unlocking)..."
                className={`w-full pl-11 pr-4 py-3 border focus:outline-none rounded-xl text-sm transition-all ${
                  darkMode 
                    ? "bg-navy-900 border-white/10 focus:border-gold-400 text-white" 
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 focus:border-navy-800 focus:bg-white text-slate-800"
                }`}
                id="service-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 font-bold"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full">
              <button
                onClick={() => setSelectedCategoryId("all")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategoryId === "all"
                    ? "bg-navy-900 text-white shadow-md shadow-navy-900/10 dark:bg-gold-400 dark:text-navy-950"
                    : darkMode
                      ? "bg-white/5 text-slate-300 hover:bg-white/10"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    selectedCategoryId === cat.id
                      ? "bg-navy-900 text-white shadow-md dark:bg-gold-400 dark:text-navy-950"
                      : darkMode
                        ? "bg-white/5 text-slate-300 hover:bg-white/10"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
          {searchQuery && (
            <p className="text-xs text-slate-405 mt-3 font-medium">
              Showing filtered results matching "<span className={darkMode ? "text-gold-300" : "text-navy-950"}>{searchQuery}</span>"
            </p>
          )}
        </div>

        {/* Services Grouping Output */}
        <div className="space-y-16">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.id} className="scroll-mt-24" id={`group-${category.id}`}>
                {/* Category Header Card */}
                <div className={`flex flex-col sm:flex-row sm:items-center gap-4 border-b pb-4 mb-8 ${
                  darkMode ? "border-white/10" : "border-slate-200"
                }`}>
                  <div className={`p-3 inline-flex rounded-xl shadow-inner shrink-0 ${
                    darkMode ? "bg-white/5 text-gold-400" : "bg-navy-900 text-gold-400"
                  }`}>
                    <CategoryIcon name={category.iconName} className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-display font-extrabold tracking-tight ${
                      darkMode ? "text-white" : "text-[#002147]"
                    }`}>
                      <span className="border-b-4 border-gold-400 pb-1 inline-block">{category.title}</span>
                    </h3>
                    <p className={`text-xs sm:text-sm mt-2 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((service) => (
                    <div
                      key={service.id}
                      className={`group rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                        darkMode 
                          ? "bg-navy-900/60 border-white/5 hover:border-gold-400/40" 
                          : "bg-white border-slate-200/80 hover:border-slate-300"
                      }`}
                    >
                      <div>
                        {/* Service Title */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h4 className={`font-display font-bold text-md transition-colors ${
                            darkMode ? "text-white group-hover:text-gold-300" : "text-navy-950 group-hover:text-navy-950"
                          }`}>
                            {service.name}
                          </h4>
                          <span className={`inline-flex p-1 rounded-lg transition-colors ${
                            darkMode 
                              ? "bg-white/5 text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-950" 
                              : "bg-slate-50 text-slate-400 group-hover:text-gold-500 group-hover:bg-gold-50"
                          }`}>
                            <Sparkles className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        {/* Description */}
                        <p className={`text-sm mb-4 line-clamp-3 leading-relaxed ${
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }`}>
                          {service.description}
                        </p>

                        {/* Bullets if present */}
                        {service.details && service.details.length > 0 && (
                          <ul className={`space-y-1.5 mb-6 text-xs ${
                            darkMode ? "text-slate-400" : "text-slate-500"
                          }`}>
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className={`w-1 h-1 rounded-full ${darkMode ? "bg-white/20" : "bg-slate-300"}`} />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* CTA Panel Inside Card */}
                      <div className={`pt-4 border-t flex items-center justify-between mt-auto ${
                        darkMode ? "border-white/10" : "border-slate-100"
                      }`}>
                        <button
                          onClick={() => setSelectedService(service)}
                          className={`text-xs font-semibold flex items-center gap-1 hover:underline focus:outline-none ${
                            darkMode ? "text-gold-400 hover:text-gold-300" : "text-navy-800 hover:text-navy-950"
                          }`}
                        >
                          <Info className="w-3.5 h-3.5 opacity-80" />
                          <span>View Details</span>
                        </button>
                        
                        <button
                          onClick={() => triggerQuickInquiry(service)}
                          className={`inline-flex items-center gap-1.5 font-semibold text-[11px] tracking-wide px-3.5 py-2 rounded-lg transition-all ${
                            darkMode 
                              ? "bg-gold-500 text-[#002147] hover:bg-gold-400" 
                              : "bg-navy-900 text-white hover:bg-gold-400 hover:text-navy-950"
                          }`}
                        >
                          <span>Inquire Now</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className={`text-center py-16 rounded-2xl border p-8 max-w-md mx-auto ${
              darkMode ? "bg-navy-900 border-white/5" : "bg-white border-slate-200"
            }`}>
              <p className={`text-sm mb-4 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                No services match your search query: <strong className={darkMode ? "text-white" : "text-navy-950"}>"{searchQuery}"</strong>
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategoryId("all");
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  darkMode ? "bg-gold-400 text-navy-950 hover:bg-gold-300" : "bg-navy-900 text-white"
                }`}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* WhatsApp Inquiry Builder Panel */}
        <div id="inquiry-form-section" className="scroll-mt-24 mt-20 max-w-3xl mx-auto">
          <div className={`p-6 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden transition-all ${
            darkMode 
              ? "bg-[#00132b] border-[#1a497c]/50 text-white" 
              : "bg-gradient-to-br from-navy-900 via-navy-950 to-navy-950 border-navy-850 text-white"
          }`}>
            
            {/* Background Accent Lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 font-sans">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="p-1.5 bg-gold-400 text-navy-950 rounded-lg text-[10px] font-extrabold uppercase tracking-widest font-mono">
                  Get Started
                </span>
                <span className="text-xs text-gold-300 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  No stress booking
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                Launch an Online Inquiry Instantly
              </h3>
              <p className="text-sm text-slate-300 mb-8 max-w-xl">
                Ready to proceed or have questions? Use our custom generator to initiate a request. We will receive it and advise you on requirements and costs via WhatsApp.
              </p>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Select a Service */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 font-mono tracking-wider uppercase">
                      Select Service Needed *
                    </label>
                    <select
                      required
                      value={inquiryServiceId}
                      onChange={(e) => setInquiryServiceId(e.target.value)}
                      className="w-full bg-[#002147] border border-navy-700 focus:border-gold-400 focus:outline-none rounded-xl p-3.5 text-sm text-white"
                      id="inquiry-service-dropdown"
                    >
                      <option value="">-- Choose from our list --</option>
                      {serviceCategories.map((group) => (
                        <optgroup key={group.id} label={group.title} className="bg-navy-950 text-slate-100">
                          {group.items.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Customer Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 font-mono tracking-wider uppercase">
                      Your Full Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Mukasa"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full bg-[#002147] border border-navy-700 focus:border-gold-400 focus:outline-none rounded-xl p-3.5 text-sm text-white"
                      id="inquiry-name-input"
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300 font-mono tracking-wider uppercase">
                    Your Specific Questions or Custom Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Can I change dates on my passport application? Or when is the soonest I can get my CV formatted? Mention here..."
                    value={inquiryCustomDetails}
                    onChange={(e) => setInquiryCustomDetails(e.target.value)}
                    className="w-full bg-[#002147] border border-navy-700 focus:border-gold-400 focus:outline-none rounded-xl p-3.5 text-sm text-white resize-none"
                    id="inquiry-details-input"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-400 text-center sm:text-left leading-relaxed">
                    Once clicked, WhatsApp will launch with your request instantly. <br />
                    Active direct listing link account: <span className="text-white font-semibold">+256 757 808 474</span>
                  </p>
                  
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-4 rounded-xl active:scale-[0.98] transition-all whitespace-nowrap shadow-lg shadow-[#25D366]/20"
                  >
                    <WhatsAppLogo className="w-5 h-5 text-white" />
                    <span>Send to WhatsApp Agent</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>

      {/* Service Detail Modal Dialog (Clean UI overlay that shows all checklist bullets) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={() => setSelectedService(null)} />
          
          <div className={`relative rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border z-10 transition-all ${
            darkMode ? "bg-navy-900 border-white/5 text-white" : "bg-white border-slate-200"
          }`}>
            {/* Header */}
            <div className="flex justify-between items-start gap-4 mb-4">
              <div className={`inline-flex p-2 rounded-xl ${
                darkMode ? "bg-white/5 text-gold-400" : "bg-navy-50 text-navy-800"
              }`}>
                <Sparkles className="w-5 h-5 text-gold-500" />
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className={`p-1 rounded-lg transition-colors ${
                  darkMode ? "hover:bg-white/5 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                }`}
                aria-label="Close dialog"
                id="close-modal-button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className={`text-xl font-display font-extrabold mb-2 leading-tight ${
              darkMode ? "text-white" : "text-navy-950"
            }`}>
              {selectedService.name}
            </h3>

            <p className={`text-sm mb-6 leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              {selectedService.description}
            </p>

            {/* Checklist of steps */}
            {selectedService.details && selectedService.details.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-450 font-mono tracking-wider uppercase mb-3">
                  Key Deliverables & Documentation Needed:
                </h4>
                <div className="space-y-2">
                  {selectedService.details.map((detail, idx) => (
                    <div key={idx} className={`flex items-start gap-3 text-sm ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTAs */}
            <div className={`pt-5 border-t flex flex-col sm:flex-row gap-3 ${
              darkMode ? "border-white/10" : "border-slate-100"
            }`}>
              <button
                onClick={() => {
                  triggerQuickInquiry(selectedService);
                  setSelectedService(null);
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <WhatsAppLogo className="w-4.5 h-4.5 text-white" />
                <span>Book This Service via WA</span>
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className={`w-full sm:w-auto border py-3 px-4 rounded-xl text-sm font-semibold transition ${
                  darkMode 
                    ? "border-white/10 hover:bg-white/5 text-slate-300" 
                    : "border-slate-200 hover:bg-slate-50 text-slate-700"
                }`}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
