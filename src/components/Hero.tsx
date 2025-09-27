"use client";

import { Button } from "./ui/button";
import { Play, Loader2 } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const [isStartLoading, setIsStartLoading] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleGetStarted = () => {
    setIsStartLoading(true);
    // Simulate loading
    setTimeout(() => setIsStartLoading(false), 2000);
  };

  const handleDemo = () => {
    setIsDemoLoading(true);
    // Simulate loading
    setTimeout(() => setIsDemoLoading(false), 2000);
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-violet-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">Setu.plus –</span>
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                The Everything App
              </span>
              <span className="block">for Digital Commerce</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl lg:mx-0 mx-auto">
              Democratizing commerce through AI-powered open networks.
            </p>
            
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl lg:mx-0 mx-auto italic">
              "Building bridges that empower every business, every consumer, every community."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-8 py-4 min-w-[180px]"
                onClick={handleGetStarted}
                disabled={isStartLoading}
              >
                {isStartLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Getting Started...
                  </>
                ) : (
                  "Get Started"
                )}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 min-w-[160px] border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={handleDemo}
                disabled={isDemoLoading}
              >
                {isDemoLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    View Demo
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Bridge Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506555004127-c7f31038ba1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJyaWRnZSUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc1ODk0NTk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bridge Technology Network"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* AI/ONDC overlay elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs font-semibold text-blue-600">ONDC Ready</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs font-semibold text-violet-600">AI Powered</div>
              </div>
              
              {/* Abstract bridge elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 rounded-full opacity-80 animate-pulse"></div>
              </div>
            </div>
            
            {/* Floating connection dots */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-violet-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-indigo-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}