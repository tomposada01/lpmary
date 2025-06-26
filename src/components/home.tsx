import React from "react";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import HowItWorksSection from "./HowItWorksSection";
import VisualPreviewSection from "./VisualPreviewSection";
import EmailCaptureSection from "./EmailCaptureSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F7FA" }}>
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/mary-logo-new.png" alt="Mary" className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-8">
            {/* Navigation links can be added here */}
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <VisualPreviewSection />
        <EmailCaptureSection />

        <footer className="w-full py-8 text-center text-sm text-gray-500 mt-12">
          <div className="container mx-auto px-4">
            <p className="font-inter mb-2" style={{ color: "#2B3A42" }}>
              Built for Freelancers. Loved by Accountants.
            </p>
            <p className="text-xs mb-4">
              © {new Date().getFullYear()} Mary. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="hover:text-gray-700 transition-colors font-inter"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-gray-700 transition-colors font-inter"
              >
                Privacy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
