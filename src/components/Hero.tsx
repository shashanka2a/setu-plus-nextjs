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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Full-width container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center py-20 lg:py-24">
            <div className="max-w-2xl">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 text-sm font-medium text-blue-700 shadow-sm mb-8 animate-fade-in-up">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Trusted by 10,000+ businesses</span>
      </div>

              {/* Headline with improved hierarchy */}
              <div className="space-y-4 mb-8">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="block bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                The Everything App
              </span>
                  <span className="block text-gray-900 mt-2">for Digital Commerce</span>
            </h1>
              </div>
              
              {/* Enhanced subheadline */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                Democratizing commerce through AI-powered open networks that connect every business, consumer, and community.
              </p>
              
              {/* Enhanced feature card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 mb-10 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-gray-800 font-semibold mb-3">AI-Powered Network</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
              "Building bridges that empower every business, every consumer, every community."
            </p>
                  </div>
                </div>
              </div>
            
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white text-lg px-10 py-5 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-16 min-w-[200px]"
                onClick={handleGetStarted}
                disabled={isStartLoading}
              >
                {isStartLoading ? (
                  <>
                      <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    Getting Started...
                  </>
                ) : (
                    <>
                      Get Started Free
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </>
                )}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                  className="text-lg px-10 py-5 rounded-2xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg bg-white/80 backdrop-blur-sm h-16 min-w-[200px]"
                  onClick={handleLearnMore}
                  disabled={isLearnLoading}
                >
                  {isLearnLoading ? (
                    <>
                      <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                      <Play className="mr-3 h-6 w-6" />
                      Watch Demo
                  </>
                )}
              </Button>
              </div>
              
              {/* Social proof */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span>Join 10,000+ users</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Illustration */}
          <div className="relative flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
            
            {/* Enhanced Background with Glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl"></div>
            
            {/* Floating Background Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-blue-400/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-5 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-indigo-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
            
            {/* Main AI Network Visualization */}
            <div className="relative z-10 w-full max-w-2xl h-full flex items-center justify-center">
              
              {/* Central Hub with Enhanced Design */}
              <div className="relative">
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full shadow-2xl animate-pulse">
                  <div className="absolute inset-4 bg-white/20 rounded-full"></div>
                  <div className="absolute inset-8 bg-white/40 rounded-full"></div>
                </div>
                
                {/* Enhanced Floating Nodes */}
                <div className="absolute top-12 left-12 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-xl animate-bounce border-4 border-white/30" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute top-12 right-12 w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-xl animate-bounce border-4 border-white/30" style={{ animationDelay: '1s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute bottom-12 left-12 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-xl animate-bounce border-4 border-white/30" style={{ animationDelay: '1.5s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute bottom-12 right-12 w-24 h-24 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full shadow-xl animate-bounce border-4 border-white/30" style={{ animationDelay: '2s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>
                
                {/* Enhanced Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8"/>
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <line x1="250" y1="250" x2="150" y2="150" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="8,4" className="animate-pulse" filter="url(#glow)"/>
                  <line x1="250" y1="250" x2="350" y2="150" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="8,4" className="animate-pulse" style={{ animationDelay: '0.5s' }} filter="url(#glow)"/>
                  <line x1="250" y1="250" x2="150" y2="350" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="8,4" className="animate-pulse" style={{ animationDelay: '1s' }} filter="url(#glow)"/>
                  <line x1="250" y1="250" x2="350" y2="350" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="8,4" className="animate-pulse" style={{ animationDelay: '1.5s' }} filter="url(#glow)"/>
                </svg>
                
                {/* Enhanced Data Flow Particles */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping shadow-lg"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '3s' }}></div>
                
                {/* Floating Data Points */}
                <div className="absolute top-8 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
                <div className="absolute bottom-8 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/3 right-8 w-2 h-2 bg-amber-400 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-12 animate-float shadow-xl border border-white/20"></div>
              <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl -rotate-12 animate-float shadow-xl border border-white/20" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -right-12 w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full animate-float shadow-lg border border-white/20" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/4 -left-12 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl rotate-45 animate-float shadow-lg border border-white/20" style={{ animationDelay: '3s' }}></div>
              
            </div>
            
            {/* Status Indicators */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">AI Active</span>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Network Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}