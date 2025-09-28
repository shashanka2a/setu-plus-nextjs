"use client";

import { Button } from "./ui/button";
import { ArrowRight, Play, Loader2 } from "lucide-react";
import { useState } from "react";

// Animation delays for staggered entrance
const ANIMATION_DELAYS = {
  badge: '0s',
  headline: '0.1s',
  description: '0.2s',
  quote: '0.3s',
  buttons: '0.4s',
  visual: '0.5s'
} as const;

export function Hero() {
  const [isStartLoading, setIsStartLoading] = useState(false);
  const [isLearnLoading, setIsLearnLoading] = useState(false);

  const handleGetStarted = () => {
    setIsStartLoading(true);
    setTimeout(() => setIsStartLoading(false), 2000);
  };

  const handleLearnMore = () => {
    setIsLearnLoading(true);
    setTimeout(() => setIsLearnLoading(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Full-width container */}
      <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-8 lg:gap-12">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center py-16 lg:py-24">
            <div className="max-w-2xl">
              
              {/* Headline */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                  The Everything App
                </span>
                <br />
                <span className="text-gray-900">for Digital Commerce</span>
                {/* VERIFICATION: This is the updated Hero component with modern SaaS design */}
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                Democratizing commerce through AI-powered open networks.
              </p>
              
              {/* Done-line Description Card */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 font-medium mb-2">AI-Powered Network</p>
                    <p className="text-gray-600 leading-relaxed">
                      "Building bridges that empower every business, every consumer, every community."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white text-lg px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={handleGetStarted}
                  disabled={isStartLoading}
                >
                  {isStartLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Getting Started...
                    </>
                  ) : (
                    <>
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-md"
                  onClick={handleLearnMore}
                  disabled={isLearnLoading}
                >
                  {isLearnLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-5 w-5" />
                      Learn More
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 lg:p-16">
            
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-indigo-100/30 to-purple-100/30 animate-pulse"></div>
            
            {/* Abstract 3D AI Illustration */}
            <div className="relative z-10 w-full max-w-lg">
              
              {/* Main AI Network Visualization */}
              <div className="relative">
                
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full shadow-2xl animate-pulse"></div>
                
                {/* Floating Nodes */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-8 right-8 w-18 h-18 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '2s' }}></div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <line x1="200" y1="200" x2="100" y2="100" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse"/>
                  <line x1="200" y1="200" x2="300" y2="100" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
                  <line x1="200" y1="200" x2="100" y2="300" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }}/>
                  <line x1="200" y1="200" x2="300" y2="300" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1.5s' }}/>
                </svg>
                
                {/* Data Flow Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-indigo-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg rotate-12 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -right-8 w-4 h-4 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}