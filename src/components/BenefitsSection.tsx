import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, FileCheck, Clock } from "lucide-react";

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
      title: "Clarity On Every Charge",
      description:
        "No more vague bank descriptions. Mary tells you what that $92 actually was.",
    },
    {
      icon: <FileCheck className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      title: "Stress Free Tax Time",
      description:
        "Everything is pre labelled and export ready for your accountant.",
    },
    {
      icon: <Clock className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      title: "Save Hours",
      description: "No more spreadsheets or chasing receipts.",
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold font-sora mb-4"
            style={{ color: "#2B3A42" }}
          >
            Why Users Love Mary
          </h2>
          <p
            className="text-xl font-inter max-w-2xl mx-auto"
            style={{ color: "#2B3A42" }}
          >
            Mary makes expense tracking effortless with powerful AI that works
            for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-inter italic" style={{ color: "#2B3A42" }}>
            "Loved by freelancers. Built for real work."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
