import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import HowItWorksSection from "./HowItWorksSection";
import EmailCaptureSection from "./EmailCaptureSection";

export default function Home() {
  return (
    <div className="min-h-screen relative z-10" style={{ backgroundColor: "transparent" }}>
      {/* Header */}
      {/* Removed header and logo. Logo will be placed in HeroSection. */}

      <main className="flex flex-col items-center">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <EmailCaptureSection />

        <footer className="w-full py-8 text-center text-sm text-gray-500 mt-12">
          <div className="container mx-auto px-4">
            <p className="font-inter mb-2" style={{ color: "#2B3A42" }}>
              Built for Freelancers & Small Businesses. Loved by Accountants.
            </p>
            <p className="text-xs mb-4">
              © {new Date().getFullYear()} Mary AI. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                to="/terms"
                className="hover:text-gray-700 transition-colors font-inter"
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className="hover:text-gray-700 transition-colors font-inter"
              >
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
