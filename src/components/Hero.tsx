"use client";

import { Button } from "./ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [isStartLoading, setIsStartLoading] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleGetStarted = () => {
    setIsStartLoading(true);
    setTimeout(() => setIsStartLoading(false), 2000);
  };

  const handleWatchDemo = () => {
    setIsDemoLoading(true);
    setTimeout(() => setIsDemoLoading(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient waves */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>
        
        {/* Floating gradient blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-200/10 to-pink-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/5 to-blue-200/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center text-center lg:text-left space-y-8">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 text-sm font-semibold text-gray-700 shadow-lg mx-auto lg:mx-0 w-fit">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span>Trusted by 10,000+ businesses</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight text-gray-900">
                The Network Powering
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                  Digital Commerce
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-2xl font-light">
              AI-powered open networks connecting every business, consumer, and community.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {/* Primary CTA */}
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 h-16 min-w-[200px]"
                onClick={handleGetStarted}
                disabled={isStartLoading}
              >
                {isStartLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Getting Started...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </Button>
              
              {/* Secondary CTA */}
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-xl font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg bg-white/80 backdrop-blur-sm h-16 min-w-[200px]"
                onClick={handleWatchDemo}
                disabled={isDemoLoading}
              >
                {isDemoLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-gray-400/30 border-t-gray-600 rounded-full animate-spin"></div>
                    Loading...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </div>
                )}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-4">
                {/* Avatar Row */}
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">
                    +9.9K
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-600">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Illustration */}
          <div className="relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
            
            {/* Background Container */}
            <div className="relative w-full max-w-2xl h-full">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"></div>
              
              {/* Floating background elements */}
              <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-blue-400/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-purple-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
              
              {/* Central Network Orb */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Main Orb */}
                <div className="relative">
                  {/* Central Glowing Orb */}
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl animate-pulse relative">
                    <div className="absolute inset-4 bg-white/20 rounded-full"></div>
                    <div className="absolute inset-8 bg-white/40 rounded-full"></div>
                    <div className="absolute inset-12 bg-white/60 rounded-full animate-ping"></div>
                    <div className="absolute inset-16 bg-white/80 rounded-full"></div>
                    
                    {/* Network text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-black text-lg">NETWORK</span>
                    </div>
                  </div>
                  
                  {/* Rotating Rings */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-200/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-200/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-indigo-200/10 rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
                  
                  {/* Floating Nodes */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '0.5s' }}>
                    <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '1s' }}>
                    <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '1.5s' }}>
                    <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '2s' }}>
                    <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1"/>
                        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8"/>
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <line x1="200" y1="200" x2="120" y2="120" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse" filter="url(#glow)"/>
                    <line x1="200" y1="200" x2="280" y2="120" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse" style={{ animationDelay: '0.5s' }} filter="url(#glow)"/>
                    <line x1="200" y1="200" x2="120" y2="280" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse" style={{ animationDelay: '1s' }} filter="url(#glow)"/>
                    <line x1="200" y1="200" x2="280" y2="280" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse" style={{ animationDelay: '1.5s' }} filter="url(#glow)"/>
                  </svg>
                  
                  {/* Floating Data Points */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping shadow-lg" style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)' }}></div>
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '1s', boxShadow: '0 0 15px rgba(139, 92, 246, 0.8)' }}></div>
                  <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s', boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)' }}></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '3s', boxShadow: '0 0 15px rgba(236, 72, 153, 0.8)' }}></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-12 animate-float shadow-xl border border-white/30" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}></div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl -rotate-12 animate-float shadow-xl border border-white/30" style={{ animationDelay: '1s', boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' }}></div>
                <div className="absolute top-1/4 -right-12 w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full animate-float shadow-lg border border-white/30" style={{ animationDelay: '2s', boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)' }}></div>
              </div>
              
              {/* Status Indicators */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)' }}></div>
                  <span className="text-xs font-semibold text-gray-700">AI Active</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }}></div>
                  <span className="text-xs font-semibold text-gray-700">Network Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}