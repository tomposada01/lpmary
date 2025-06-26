import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";

interface EmailCaptureSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  placeholderText?: string;
}

const EmailCaptureSection = ({
  title = "Join the First 100 to Try Mary",
  description = "We'll notify you when we're ready. No spam, just clarity.",
  buttonText = "Join the Waitlist",
  placeholderText = "Enter your email address",
}: EmailCaptureSectionProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setIsSubmitted(true);
    setEmail("");
    // Reset the submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      className="w-full py-16 px-4"
      id="signup"
      style={{ backgroundColor: "#F5F7FA" }}
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

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder={placeholderText}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow h-12 text-base"
                />
                <Button
                  type="submit"
                  className="h-12 px-6 font-inter font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  {buttonText}
                </Button>
              </form>

              {isSubmitted && (
                <div className="mt-4 text-green-600 animate-fade-in">
                  Thank you! We'll be in touch soon.
                </div>
              )}

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
