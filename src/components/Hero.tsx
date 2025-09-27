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
    <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-violet-50 to-indigo-50 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/25 to-violet-400/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-400/25 to-indigo-400/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-3 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              <span className="block animate-slide-in-left text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 mb-2">Setu.plus –</span>
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent animate-slide-in-right mb-2">
                The Everything App
              </span>
              <span className="block animate-slide-in-left text-3xl md:text-4xl lg:text-5xl">for Digital Commerce</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl lg:mx-0 mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Democratizing commerce through AI-powered open networks.
            </p>
            
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl lg:mx-0 mx-auto italic animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              "Building bridges that empower every business, every consumer, every community."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-10 py-5 min-w-[220px] transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
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
                className="text-lg px-10 py-5 min-w-[220px] border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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

          {/* Commerce & AI Network Visualization */}
          <div className="lg:col-span-2 relative group animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Network Grid Background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-violet-50/30 to-indigo-50/50"></div>
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#8B5CF6" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Floating Commerce Icons */}
              <div className="relative z-10 grid grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-100/80 rounded-xl p-3 text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-2xl mb-1">🛒</div>
                  <div className="text-xs font-semibold text-blue-700">ShopPe</div>
                </div>
                <div className="bg-green-100/80 rounded-xl p-3 text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-2xl mb-1">🍎</div>
                  <div className="text-xs font-semibold text-green-700">FoodPe</div>
                </div>
                <div className="bg-orange-100/80 rounded-xl p-3 text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-2xl mb-1">🚗</div>
                  <div className="text-xs font-semibold text-orange-700">RidePe</div>
                </div>
                <div className="bg-purple-100/80 rounded-xl p-3 text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-2xl mb-1">🎓</div>
                  <div className="text-xs font-semibold text-purple-700">LearnPe</div>
                </div>
                <div className="bg-indigo-100/80 rounded-xl p-3 text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-2xl mb-1">🏥</div>
                  <div className="text-xs font-semibold text-indigo-700">DocPe</div>
                </div>
                <div className="bg-violet-100/80 rounded-xl p-3 text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-2xl mb-1">🎫</div>
                  <div className="text-xs font-semibold text-violet-700">TicketPe</div>
                </div>
              </div>
              
              {/* AI Network Visualization */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  AI-Powered Network
                </div>
                <div className="text-gray-600 text-sm">
                  Connecting businesses, consumers, and communities through intelligent commerce
                </div>
              </div>
              
              {/* Floating connection lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <path d="M20,50 Q100,20 180,50" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.7" className="animate-pulse"/>
                  <path d="M20,100 Q100,70 180,100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                  <path d="M20,150 Q100,120 180,150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6" className="animate-pulse" style={{animationDelay: '1s'}}/>
                </svg>
              </div>
            </div>
            
            {/* Floating data points */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-bounce opacity-70"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-violet-500 rounded-full animate-bounce opacity-70" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-indigo-500 rounded-full animate-bounce opacity-70" style={{animationDelay: '0.7s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}