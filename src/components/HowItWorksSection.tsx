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
      title: "Upload Your Transactions",
      description:
        "Upload your CSV file. No account linking needed.",
      icon: <FileText className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      imageAlt: "CSV upload interface",
    },
    {
      id: 2,
      title: "Let the AI Categorise Everything",
      description: "Mary auto-tags expenses and adds notes when things are unclear.",
      icon: <Zap className="h-8 w-8" style={{ color: "#FF6B6B" }} />,
      imageAlt: "Categorised transactions view",
    },
    {
      id: 3,
      title: "Export or Share with Your Accountant",
      description:
        "Download a clean report ready for the tax office or your accountant.",
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
    >
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold font-sora mb-4"
            style={{ color: "#2B3A42" }}
          >
            See How Mary Works
          </h2>
          <div className="mx-auto my-6 h-1 w-64 max-w-full rounded-full" style={{ background: '#FF6B6B' }} />
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
                <Card className="bg-white border-none shadow-lg overflow-hidden flex items-center justify-center p-0">
                  <CardContent className="p-0">
                    {index === 0 ? (
                      <img
                        src="/upload.demo-gif.gif"
                        alt="CSV Upload Demo"
                        className="object-contain w-full h-auto max-h-[28rem] rounded-xl shadow-md"
                        style={{ background: '#f3f4f6' }}
                        loading="lazy"
                      />
                    ) : index === 1 ? (
                      <img
                        src="/transaction.demo-gif.gif"
                        alt="Categorised Transactions Demo"
                        className="object-contain w-full h-auto max-h-[28rem] rounded-xl shadow-md"
                        style={{ background: '#f3f4f6' }}
                        loading="lazy"
                      />
                    ) : index === 2 ? (
                      <img
                        src="/export.demo-gif.gif"
                        alt="Export Demo"
                        className="object-contain w-full h-auto max-h-[28rem] rounded-xl shadow-md"
                        style={{ background: '#f3f4f6' }}
                        loading="lazy"
                      />
                    ) : (
                      <></>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
