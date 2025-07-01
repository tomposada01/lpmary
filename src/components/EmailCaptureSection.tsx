import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { useWaitlistForm } from "../hooks/useWaitlistForm";

interface EmailCaptureSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  placeholderText?: string;
}

const EmailCaptureSection = ({
  title = "Join the First 100 to Try Mary",
  description = "We'll notify you when we're ready. No spam, just clarity.",
  buttonText = "Get Early Access",
  placeholderText = "Enter your email address",
}: EmailCaptureSectionProps) => {
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
      className="w-full py-16 px-4"
      id="signup"
    >
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-slate-50 to-white">
          <CardContent className="p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold font-sora mb-4"
                style={{ color: "#2B3A42" }}
              >
                {title}
              </h2>
              <p
                className="mb-8 text-lg font-inter"
                style={{ color: "#2B3A42" }}
              >
                {description}
              </p>

              <form className="flex flex-col sm:flex-row gap-2 items-center justify-center w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-grow h-12 md:h-10 lg:h-9 text-base md:text-sm bg-white border border-gray-200 shadow-sm rounded-lg"
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
                  disabled={loading}
                  className="h-12 px-6 font-inter font-medium text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  {loading ? 'Submitting...' : 'Get Early Access'}
                </Button>
              </form>
              {error && <div className="text-red-600 text-xs mt-2">{error}</div>}
              {success && <div className="text-green-600 text-xs mt-2">Thank you! We'll be in touch soon.</div>}

              <p
                className="text-xs mt-4 font-inter"
                style={{ color: "#2B3A42" }}
              >
                By signing up, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
