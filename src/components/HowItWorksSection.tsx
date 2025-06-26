import React from "react";
import { motion } from "framer-motion";
import { FileText, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageAlt: string;
}

const HowItWorksSection = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Upload Your CSV",
      description:
        "Export your transactions from your bank or Xero. Mary handles the messy part.",
      icon: <FileText className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      imageAlt: "CSV upload interface",
    },
    {
      id: 2,
      title: "Mary Categorises Everything",
      description: "She instantly reads and labels your expenses using AI.",
      icon: <Zap className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      imageAlt: "Categorised transactions view",
    },
    {
      id: 3,
      title: "Add Quick Notes",
      description:
        'Add context like "client lunch" or "gear upgrade." Everything is saved and ready for tax time.',
      icon: <CheckCircle className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      imageAlt: "Transaction notes interface",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: "#F5F7FA" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold font-sora mb-4"
            style={{ color: "#2B3A42" }}
          >
            See How Mary Works
          </h2>
          <p
            className="text-lg font-inter max-w-2xl mx-auto"
            style={{ color: "#2B3A42" }}
          >
            Get started in minutes with these simple steps
          </p>
        </div>

        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-[#FF6B6B]/10 to-[#1A365D]/10">
                    {step.icon}
                  </div>
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold"
                    style={{ backgroundColor: "#FF6B6B" }}
                  >
                    <span>{step.id}</span>
                  </div>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold font-sora"
                  style={{ color: "#2B3A42" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-lg font-inter leading-relaxed"
                  style={{ color: "#2B3A42" }}
                >
                  {step.description}
                </p>
              </div>

              {/* Image Placeholder */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <Card className="bg-white border-none shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#1A365D] rounded-full mx-auto mb-4 flex items-center justify-center">
                          {step.icon}
                        </div>
                        <p className="text-gray-600 font-inter text-sm">
                          {step.imageAlt}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#FF6B6B]/20 to-[#1A365D]/20 rounded-full blur-xl" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#1A365D]/20 to-[#FF6B6B]/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
