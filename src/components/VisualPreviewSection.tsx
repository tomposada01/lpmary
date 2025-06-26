import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const VisualPreviewSection = () => {
  return (
    <section
      className="py-16 px-4 md:px-8"
      style={{ backgroundColor: "#F5F7FA" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold font-sora mb-4"
            style={{ color: "#2B3A42" }}
          >
            See Mary In Action
          </h2>
          <p
            className="text-lg font-inter max-w-2xl mx-auto"
            style={{ color: "#2B3A42" }}
          >
            A glimpse of how Mary transforms your expense tracking
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-coral-100/30 to-navy-500/20 rounded-2xl blur-xl opacity-50" />

          {/* Product preview placeholder */}
          <Card className="relative bg-white border-none shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-navy-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <p className="text-gray-600 font-inter text-lg">
                    Mary Dashboard Preview
                  </p>
                  <p className="text-gray-400 font-inter text-sm mt-2">
                    Coming Soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisualPreviewSection;
