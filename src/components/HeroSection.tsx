import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Categorise Every Expense. Instantly.",
  subtitle = "Mary is your AI powered expense assistant built for freelancers and small business owners. She helps you understand what every transaction was, without the manual work.",
  ctaText = "Join the Waitlist",
  onCtaClick = () => {},
}: HeroSectionProps) => {
  return (
    <section
      className="w-full min-h-[700px] bg-gradient-to-br from-coral-500/10 via-white to-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-16 relative overflow-hidden"
      style={{ backgroundColor: "#F5F7FA" }}
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-coral-100/30 to-navy-500/20 rounded-full blur-3xl -z-10 opacity-70" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-navy-500/20 to-coral-100/30 rounded-full blur-3xl -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora leading-tight"
            style={{ color: "#2B3A42" }}
          >
            {title}
          </h1>
          <p
            className="text-lg md:text-xl font-inter max-w-lg mx-auto lg:mx-0"
            style={{ color: "#2B3A42" }}
          >
            {subtitle}
          </p>
          <div className="pt-4">
            <Button
              onClick={onCtaClick}
              size="lg"
              className="font-inter font-medium px-8 py-6 h-auto rounded-lg text-lg shadow-lg transition-all duration-300 text-white hover:opacity-90"
              style={{ backgroundColor: "#FF6B6B" }}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p
              className="text-sm font-inter mt-3 opacity-80"
              style={{ color: "#2B3A42" }}
            >
              First 100 get exclusive early access and a chance at lifetime free
              access.
            </p>
          </div>
        </div>

        {/* Right column - Product Screenshot Placeholder */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
          {/* Placeholder for product screenshot */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-8 text-center">
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
              <p className="text-gray-500 font-inter">
                Product Screenshot Placeholder
              </p>
            </div>
            <p className="text-sm text-gray-400 font-inter">
              Mary Dashboard Preview
            </p>
          </div>

          {/* Original Dashboard mockup (keeping as backup) */}
          <div className="hidden">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Dashboard header */}
              <div className="bg-gradient-to-r from-navy-500 to-navy-700 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="text-white font-medium">Mary Dashboard</div>
                <div className="w-16" />
              </div>

              {/* Dashboard content */}
              <div className="p-6 bg-gray-50">
                {/* Chart section */}
                <div className="mb-6">
                  <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                  <div className="h-40 bg-white rounded-lg p-4 border border-gray-100 flex items-end justify-between">
                    <div className="h-20 w-8 bg-navy-500 rounded-t-md" />
                    <div className="h-32 w-8 bg-navy-600 rounded-t-md" />
                    <div className="h-16 w-8 bg-navy-400 rounded-t-md" />
                    <div className="h-24 w-8 bg-coral-400 rounded-t-md" />
                    <div className="h-28 w-8 bg-coral-500 rounded-t-md" />
                    <div className="h-12 w-8 bg-navy-300 rounded-t-md" />
                  </div>
                </div>

                {/* Categories section */}
                <div className="mb-6">
                  <div className="h-4 w-40 bg-gray-200 rounded mb-2" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-coral-400 mr-3" />
                        <div className="h-4 w-24 bg-gray-200 rounded" />
                      </div>
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-navy-500 mr-3" />
                        <div className="h-4 w-32 bg-gray-200 rounded" />
                      </div>
                      <div className="h-4 w-12 bg-gray-200 rounded" />
                    </div>
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-navy-300 mr-3" />
                        <div className="h-4 w-28 bg-gray-200 rounded" />
                      </div>
                      <div className="h-4 w-14 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>

                {/* AI suggestion */}
                <div className="bg-gradient-to-r from-coral-50 to-coral-100 p-4 rounded-lg border border-coral-200">
                  <div className="flex items-center mb-2">
                    <div className="h-5 w-5 rounded-full bg-coral-500 mr-2" />
                    <div className="h-4 w-24 bg-coral-200 rounded" />
                  </div>
                  <div className="h-3 w-full bg-coral-200 rounded mb-1" />
                  <div className="h-3 w-5/6 bg-coral-200 rounded mb-1" />
                  <div className="h-3 w-4/6 bg-coral-200 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-coral-400 to-coral-500 rounded-full blur-2xl opacity-20" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-navy-400 to-navy-600 rounded-full blur-2xl opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
