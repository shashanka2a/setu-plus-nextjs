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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/20 overflow-hidden">
      {/* Swiggy-inspired background with depth and floating layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-blue-50/30"></div>
        
        {/* Floating gradient waves */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20 rounded-b-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-tl from-purple-100/20 via-transparent to-indigo-100/20 rounded-t-full blur-3xl"></div>
        
        {/* Abstract floating shapes for depth */}
        <div className="absolute top-32 left-32 w-72 h-72 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-16 w-64 h-64 bg-gradient-to-br from-indigo-200/10 to-blue-200/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '8s' }}></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E5E7EB' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Full-width container with generous padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-20 lg:gap-24 items-center py-20 lg:py-32">
          
          {/* Left Column - Modern SaaS Content */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <div className="max-w-2xl mx-auto lg:mx-0">
              
              {/* Trust Badge - Pill-shaped with gradient */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-8 py-4 text-sm font-semibold text-blue-700 shadow-lg backdrop-blur-sm animate-fade-in-up">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  <span>Trusted by 10,000+ businesses</span>
                </div>
              </div>
              
              {/* Modern SaaS Headline */}
              <div className="mb-8">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-gray-900">
                  <span className="block">
                    <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                      AI-Powered
                    </span> Network
                  </span>
                  <span className="block text-gray-900 mt-2">for Digital Commerce</span>
                </h1>
              </div>
              
              {/* Concise Subheadline */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 max-w-xl">
                Connect every business, consumer, and community with AI-powered open networks.
              </p>
              
              {/* Modern CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                {/* Primary CTA - Large gradient button */}
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white text-lg px-10 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] transform hover:scale-105 transition-all duration-300 h-18 min-w-[260px]"
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
                  className="text-lg px-10 py-6 rounded-2xl font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg bg-white/95 backdrop-blur-sm h-18 min-w-[260px]"
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
              
              {/* Trust Row - Avatar group + rating */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-3 border-white shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-3 border-white shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full border-3 border-white shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs">
                      +9.9K
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="font-semibold text-gray-700">Trusted by 10,000+ users • 4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bold Abstract Network Illustration */}
          <div className="relative flex items-center justify-center min-h-[600px] lg:min-h-[700px] order-1 lg:order-2">
            
            {/* Urban Company-inspired background with depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-purple-50/90 rounded-3xl shadow-2xl border border-white/30 backdrop-blur-sm"></div>
            
            {/* Floating gradient blobs for depth */}
            <div className="absolute top-8 left-8 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-blue-400/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-8 right-8 w-48 h-48 bg-gradient-to-br from-purple-200/30 to-purple-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/2 right-8 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-indigo-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
            
            {/* Main Abstract Network Visualization */}
            <div className="relative z-10 w-full max-w-2xl h-full flex items-center justify-center">
              
              {/* Central AI Hub */}
              <div className="relative">
                {/* Central Core - Bold and prominent */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full shadow-2xl animate-pulse">
                  <div className="absolute inset-6 bg-white/20 rounded-full"></div>
                  <div className="absolute inset-12 bg-white/40 rounded-full"></div>
                  <div className="absolute inset-18 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute inset-24 bg-white/80 rounded-full animate-pulse"></div>
                  {/* AI Text in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-black text-lg">AI</span>
                  </div>
                </div>
                
                {/* Network Nodes - Larger and more prominent */}
                <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl animate-bounce border-4 border-white/40" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-3 bg-white/30 rounded-full"></div>
                  <div className="absolute inset-6 bg-white/50 rounded-full animate-pulse"></div>
                  <div className="absolute inset-9 bg-white/70 rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-4 right-4 w-28 h-28 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-2xl animate-bounce border-4 border-white/40" style={{ animationDelay: '1s' }}>
                  <div className="absolute inset-3 bg-white/30 rounded-full"></div>
                  <div className="absolute inset-6 bg-white/50 rounded-full animate-pulse"></div>
                  <div className="absolute inset-9 bg-white/70 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-4 left-4 w-30 h-30 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-2xl animate-bounce border-4 border-white/40" style={{ animationDelay: '1.5s' }}>
                  <div className="absolute inset-3 bg-white/30 rounded-full"></div>
                  <div className="absolute inset-6 bg-white/50 rounded-full animate-pulse"></div>
                  <div className="absolute inset-9 bg-white/70 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-4 right-4 w-36 h-36 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full shadow-2xl animate-bounce border-4 border-white/40" style={{ animationDelay: '2s' }}>
                  <div className="absolute inset-3 bg-white/30 rounded-full"></div>
                  <div className="absolute inset-6 bg-white/50 rounded-full animate-pulse"></div>
                  <div className="absolute inset-9 bg-white/70 rounded-full animate-ping"></div>
                </div>
                
                {/* Bold Connection Lines with flowing animation */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="boldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9"/>
                      <stop offset="25%" stopColor="#8B5CF6" stopOpacity="1"/>
                      <stop offset="50%" stopColor="#EC4899" stopOpacity="1"/>
                      <stop offset="75%" stopColor="#8B5CF6" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.9"/>
                    </linearGradient>
                    <filter id="boldGlow">
                      <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <line x1="250" y1="250" x2="150" y2="150" stroke="url(#boldGradient)" strokeWidth="8" strokeDasharray="25,15" className="animate-pulse" filter="url(#boldGlow)"/>
                  <line x1="250" y1="250" x2="350" y2="150" stroke="url(#boldGradient)" strokeWidth="8" strokeDasharray="25,15" className="animate-pulse" style={{ animationDelay: '0.5s' }} filter="url(#boldGlow)"/>
                  <line x1="250" y1="250" x2="150" y2="350" stroke="url(#boldGradient)" strokeWidth="8" strokeDasharray="25,15" className="animate-pulse" style={{ animationDelay: '1s' }} filter="url(#boldGlow)"/>
                  <line x1="250" y1="250" x2="350" y2="350" stroke="url(#boldGradient)" strokeWidth="8" strokeDasharray="25,15" className="animate-pulse" style={{ animationDelay: '1.5s' }} filter="url(#boldGlow)"/>
                </svg>
                
                {/* Floating Micro-interactions - Pulsing dots */}
                <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-500 rounded-full animate-ping shadow-lg" style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.9)' }}></div>
                <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '1s', boxShadow: '0 0 30px rgba(139, 92, 246, 0.9)' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-indigo-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s', boxShadow: '0 0 30px rgba(99, 102, 241, 0.9)' }}></div>
                <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-pink-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '3s', boxShadow: '0 0 30px rgba(236, 72, 153, 0.9)' }}></div>
                
                {/* Animated Gradient Blobs */}
                <div className="absolute top-8 left-1/2 w-5 h-5 bg-cyan-400 rounded-full animate-float" style={{ boxShadow: '0 0 25px rgba(34, 211, 238, 0.9)' }}></div>
                <div className="absolute bottom-8 right-1/3 w-5 h-5 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '1.5s', boxShadow: '0 0 25px rgba(16, 185, 129, 0.9)' }}></div>
                <div className="absolute top-1/3 right-8 w-5 h-5 bg-amber-400 rounded-full animate-float" style={{ animationDelay: '3s', boxShadow: '0 0 25px rgba(245, 158, 11, 0.9)' }}></div>
              </div>
              
              {/* Floating Elements - Enhanced micro-interactions */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-12 animate-float shadow-2xl border border-white/30" style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }}></div>
              <div className="absolute -bottom-12 -right-12 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl -rotate-12 animate-float shadow-2xl border border-white/30" style={{ animationDelay: '1s', boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' }}></div>
              <div className="absolute top-1/4 -right-24 w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full animate-float shadow-xl border border-white/30" style={{ animationDelay: '2s', boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' }}></div>
              <div className="absolute bottom-1/4 -left-24 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl rotate-45 animate-float shadow-xl border border-white/30" style={{ animationDelay: '3s', boxShadow: '0 0 30px rgba(236, 72, 153, 0.6)' }}></div>
              
            </div>
            
            {/* Status Indicators - Enhanced with glow */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/30 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.9)' }}></div>
                <span className="text-sm font-bold text-gray-700">AI Active</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/30 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.9)' }}></div>
                <span className="text-sm font-bold text-gray-700">Network Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}