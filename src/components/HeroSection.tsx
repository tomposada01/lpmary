import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useWaitlistForm } from "../hooks/useWaitlistForm";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Instantly Categorise Your Business Expenses with AI",
  subtitle = "Your AI powered expense assistant built for freelancers and small business owners. Helping you categorise every transaction without the manual work.",
  ctaText = "Get Early Access",
  onCtaClick = () => {},
}: HeroSectionProps) => {
  const {
    email,
    setEmail,
    type,
    setType,
    loading,
    success,
    error,
    handleSubmit,
  } = useWaitlistForm();

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center lg:items-start justify-center lg:justify-start px-4 md:px-8 lg:px-16 pt-0 pb-16 relative overflow-hidden"
    >
      {/* Logo floating above the fold */}
      <div className="w-full flex justify-center lg:justify-start items-center lg:items-start">
        <img
          src="/mary-logo-new.png"
          alt="Mary"
          className="h-20 md:h-28 lg:h-32 w-auto mb-4 mt-0"
          style={{ zIndex: 2 }}
        />
      </div>

      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-coral-100/30 to-navy-500/20 rounded-full blur-3xl -z-10 opacity-70" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-navy-500/20 to-coral-100/30 rounded-full blur-3xl -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left column - Text content */}
        <div className="flex flex-col space-y-4 text-center lg:text-left max-w-xl lg:max-w-lg">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold font-sora leading-tight lg:leading-snug"
            style={{ color: "#2B3A42" }}
          >
            {title}
          </h1>
          <p
            className="text-base md:text-lg lg:text-[1.15rem] font-inter max-w-md mx-auto lg:mx-0"
            style={{ color: "#2B3A42" }}
          >
            {subtitle}
          </p>
          <form className="flex flex-col sm:flex-row gap-2 items-center lg:items-end w-full max-w-lg lg:max-w-none mx-auto lg:mx-0" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-grow h-12 md:h-10 lg:h-9 text-base md:text-sm bg-white border border-gray-200 shadow-sm"
              style={{ minWidth: 0 }}
            />
            <select
              required
              value={type}
              onChange={e => setType(e.target.value)}
              className="h-12 md:h-10 lg:h-9 px-3 rounded-lg border border-gray-200 text-base md:text-sm font-inter focus:outline-none focus:ring-2 focus:ring-coral-400 bg-white shadow-sm"
              style={{ minWidth: 140 }}
            >
              <option value="" disabled>Select type</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Small Business Owner">Small Business Owner</option>
              <option value="Individual">Individual</option>
              <option value="Other">Other</option>
            </select>
            <Button
              type="submit"
              size="sm"
              disabled={loading}
              className="font-inter font-medium px-6 py-3 md:px-4 md:py-2 lg:px-3 lg:py-2 h-12 md:h-10 lg:h-9 rounded-lg text-base md:text-sm shadow-md transition-all duration-300 text-white hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: "#FF6B6B" }}
            >
              {loading ? 'Submitting...' : ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          {error && <div className="text-red-600 text-xs mt-2">{error}</div>}
          {success && <div className="text-green-600 text-xs mt-2">Thank you! We'll be in touch soon.</div>}
          <p
            className="text-xs font-inter mt-2 opacity-80 flex items-center justify-center lg:justify-start gap-2 text-center lg:text-left"
            style={{ color: "#2B3A42" }}
          >
            <CheckCircle className="text-green-500 w-4 h-4 inline-block" />
            Join the waitlist - first 100 get early access and a chance at free lifetime use.
          </p>
        </div>

        {/* Right column - Product Screenshot Placeholder */}
        <div className="relative w-full max-w-xl mx-auto lg:max-w-2xl">
          {/* Glare effect behind the card */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-5/6 h-32 bg-gradient-to-br from-white/80 via-coral-100/60 to-navy-100/40 rounded-full blur-2xl opacity-70" />
          </div>
          {/* Product GIF inside mockup */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex items-center justify-center z-10 p-0">
            <div className="bg-gray-100 rounded-lg w-full h-auto flex items-center justify-center overflow-hidden">
              <img
                src="/dashboard.demo-gif.gif"
                alt="Mary Dashboard Demo"
                className="object-contain w-full h-auto max-h-[32rem] rounded-lg shadow-md"
                style={{ background: '#f3f4f6' }}
                loading="lazy"
              />
            </div>
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
