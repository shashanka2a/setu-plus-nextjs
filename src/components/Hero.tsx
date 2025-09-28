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
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Full-width container with enhanced padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-16 lg:gap-20 items-center py-24 lg:py-32">
          
          {/* Left Column - Content with improved hierarchy */}
          <div className="flex flex-col justify-center">
            <div className="max-w-md mx-auto lg:mx-0">
              
              {/* Trust Badge - Centered above headline */}
              <div className="text-center lg:text-left mb-8">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 text-sm font-medium text-blue-700 shadow-lg animate-fade-in-up">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Trusted by 10,000+ businesses</span>
                </div>
              </div>
              
              {/* Refactored Headline with stronger hierarchy */}
              <div className="space-y-6 mb-10">
                {/* Subtitle above headline */}
                <p className="text-lg lg:text-xl text-gray-500 font-medium tracking-wide uppercase">
                  for Digital Commerce
                </p>
                
                {/* Main headline with increased size and gradient accent */}
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="block bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                    The Everything App
                  </span>
                </h1>
              </div>
              
              {/* Enhanced subheadline with reduced width */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
                Democratizing commerce through AI-powered open networks that connect every business, consumer, and community.
              </p>
              
              {/* Enhanced feature card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-gray-800 font-semibold mb-3">AI-Powered Network</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      "Building bridges that empower every business, every consumer, every community."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced CTA Buttons with better spacing */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                {/* Primary CTA - Gradient with hover glow */}
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white text-lg px-12 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transform hover:scale-105 transition-all duration-300 h-16 min-w-[220px]"
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
                
                {/* Secondary CTA - Outlined with icon */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-12 py-6 rounded-2xl font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg bg-white/90 backdrop-blur-sm h-16 min-w-[220px]"
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
              
              {/* Enhanced Social proof */}
              <div className="flex items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                  <span className="font-medium">Join 10,000+ users</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-medium">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Illustration with Animated Connectors */}
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
                {/* Central Core with enhanced glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full shadow-2xl animate-pulse">
                  <div className="absolute inset-4 bg-white/20 rounded-full"></div>
                  <div className="absolute inset-8 bg-white/40 rounded-full"></div>
                  <div className="absolute inset-12 bg-white/60 rounded-full animate-ping"></div>
                </div>
                
                {/* Enhanced Floating Nodes with stronger glow */}
                <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl animate-bounce border-4 border-white/30" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  <div className="absolute inset-4 bg-white/50 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-2xl animate-bounce border-4 border-white/30" style={{ animationDelay: '1s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  <div className="absolute inset-4 bg-white/50 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-8 left-8 w-22 h-22 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-2xl animate-bounce border-4 border-white/30" style={{ animationDelay: '1.5s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  <div className="absolute inset-4 bg-white/50 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-8 right-8 w-28 h-28 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full shadow-2xl animate-bounce border-4 border-white/30" style={{ animationDelay: '2s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  <div className="absolute inset-4 bg-white/50 rounded-full animate-pulse"></div>
                </div>
                
                {/* Enhanced Connection Lines with animated glow */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.9"/>
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="strongGlow">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <line x1="250" y1="250" x2="150" y2="150" stroke="url(#lineGradient)" strokeWidth="4" strokeDasharray="12,6" className="animate-pulse" filter="url(#strongGlow)"/>
                  <line x1="250" y1="250" x2="350" y2="150" stroke="url(#lineGradient)" strokeWidth="4" strokeDasharray="12,6" className="animate-pulse" style={{ animationDelay: '0.5s' }} filter="url(#strongGlow)"/>
                  <line x1="250" y1="250" x2="150" y2="350" stroke="url(#lineGradient)" strokeWidth="4" strokeDasharray="12,6" className="animate-pulse" style={{ animationDelay: '1s' }} filter="url(#strongGlow)"/>
                  <line x1="250" y1="250" x2="350" y2="350" stroke="url(#lineGradient)" strokeWidth="4" strokeDasharray="12,6" className="animate-pulse" style={{ animationDelay: '1.5s' }} filter="url(#strongGlow)"/>
                </svg>
                
                {/* Enhanced Data Flow Particles with glow */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' }}></div>
                <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '1s', boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s', boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}></div>
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '3s', boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)' }}></div>
                
                {/* Floating Data Points with enhanced glow */}
                <div className="absolute top-8 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-float" style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.6)' }}></div>
                <div className="absolute bottom-8 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '1.5s', boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}></div>
                <div className="absolute top-1/3 right-8 w-3 h-3 bg-amber-400 rounded-full animate-float" style={{ animationDelay: '3s', boxShadow: '0 0 15px rgba(245, 158, 11, 0.6)' }}></div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-12 animate-float shadow-2xl border border-white/20" style={{ boxShadow: '0 0 25px rgba(59, 130, 246, 0.4)' }}></div>
              <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl -rotate-12 animate-float shadow-2xl border border-white/20" style={{ animationDelay: '1s', boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)' }}></div>
              <div className="absolute top-1/4 -right-16 w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full animate-float shadow-xl border border-white/20" style={{ animationDelay: '2s', boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}></div>
              <div className="absolute bottom-1/4 -left-16 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl rotate-45 animate-float shadow-xl border border-white/20" style={{ animationDelay: '3s', boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)' }}></div>
              
            </div>
            
            {/* Enhanced Status Indicators with animated glow */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)' }}></div>
                <span className="text-sm font-bold text-gray-700">AI Active</span>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)' }}></div>
                <span className="text-sm font-bold text-gray-700">Network Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}