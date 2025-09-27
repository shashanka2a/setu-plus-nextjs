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
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-violet-400/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-400/15 to-indigo-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up space-y-8">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 text-sm font-medium text-blue-700 animate-slide-in-left">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Setu.plus Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block animate-slide-in-left text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mb-2">The</span>
              <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent animate-slide-in-right mb-2">
                Everything App
              </span>
              <span className="block animate-slide-in-left text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">for Digital Commerce</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl lg:mx-0 mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Democratizing commerce through AI-powered open networks that connect businesses, consumers, and communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-10 py-5 min-w-[200px] transform hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-lg"
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
                className="text-lg px-10 py-5 min-w-[200px] border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white/80 backdrop-blur-sm"
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
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center text-sm text-gray-500 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>ONDC Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Open Network</span>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className="relative group animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#8B5CF6" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Main Image */}
              <div className="relative z-10 transform group-hover:scale-105 transition-all duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1506555004127-c7f31038ba1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJyaWRnZSUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc1ODk0NTk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital Commerce Network"
                  className="w-full h-auto rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                />
                
                {/* Enhanced overlay elements */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl p-4 shadow-lg transform hover:scale-110 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="text-sm font-semibold">ONDC Ready</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl p-4 shadow-lg transform hover:scale-110 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="text-sm font-semibold">AI Powered</div>
                  </div>
                </div>
                
                {/* Network connection visualization */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 rounded-full opacity-80 animate-pulse group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Floating data points with better positioning */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 shadow-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-violet-500 rounded-full animate-bounce opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 shadow-lg" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute top-1/2 -right-3 w-3 h-3 bg-indigo-500 rounded-full animate-bounce opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 shadow-lg" style={{animationDelay: '0.7s'}}></div>
              
              {/* Additional floating elements */}
              <div className="absolute top-1/4 -left-3 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1.2s'}}></div>
              <div className="absolute bottom-1/4 -left-2 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}