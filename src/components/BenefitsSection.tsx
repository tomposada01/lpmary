import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, FileCheck, Clock, CheckCircle } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit = (
  { icon, title, description }: BenefitProps = {
    icon: <Eye className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
    title: "Clarity On Every Charge",
    description:
      "No more vague bank descriptions. Mary tells you what that $92 actually was.",
  },
) => {
  return (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <CardContent className="pt-8 px-6 pb-6 flex flex-col items-center text-center h-full">
        <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-[#FF6B6B]/10 to-[#1A365D]/10">
          {icon}
        </div>
        <h3
          className="text-xl font-semibold font-sora mb-4"
          style={{ color: "#2B3A42" }}
        >
          {title}
        </h3>
        <p className="font-inter flex-grow" style={{ color: "#2B3A42" }}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Eye className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      title: "Built for freelancers and small business owners",
      description: "Clarifies messy transactions instantly",
    },
    {
      icon: <FileCheck className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      title: "Helps you stay ready for tax time",
      description: "Remembers what that $92 charge was for",
    },
    {
      icon: <Clock className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      title: "Zero setup — just upload and go",
      description: "",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4" style={{ color: "#2B3A42" }}>
            Why Users Love Mary
          </h2>
          <p className="text-xl font-inter max-w-2xl mx-auto" style={{ color: "#2B3A42" }}>
            Mary makes expense tracking effortless with powerful AI that works for you.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-lg p-8 border border-gray-100 text-center">
            <Eye className="text-coral-500 w-10 h-10 mb-4" />
            <div className="font-semibold text-lg mb-2">Built For Freelancers And Small Business Owners</div>
            <div className="text-base text-gray-700">Clarifies messy transactions in seconds</div>
          </div>
          <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-lg p-8 border border-gray-100 text-center">
            <FileCheck className="text-navy-500 w-10 h-10 mb-4" />
            <div className="font-semibold text-lg mb-2">Helps You Stay Ready For Tax Time</div>
            <div className="text-base text-gray-700">Remembers exactly what that $92 charge was for</div>
          </div>
          <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-lg p-8 border border-gray-100 text-center">
            <Clock className="text-green-500 w-10 h-10 mb-4" />
            <div className="font-semibold text-lg mb-2">Zero Setup Required</div>
            <div className="text-base text-gray-700">Simply upload your file and get started</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
