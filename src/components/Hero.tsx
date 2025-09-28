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
    <section className="min-h-[85vh] bg-gradient-to-br from-white via-blue-50/30 to-violet-50/40 relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient blobs with staggered pulse animations */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-violet-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-200/10 to-violet-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '5s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200/50 rounded-full px-6 py-3 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-pulse"></div>
              <span>Trusted by 10,000+ businesses</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-gray-900">
              The Network Powering
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mt-2">
                Digital Commerce
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-600 max-w-2xl leading-relaxed">
              AI-powered open networks connecting every business, consumer, and community.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Primary CTA */}
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-10 py-4 text-lg font-semibold hover:scale-105 shadow-xl transition-all duration-300"
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
                className="px-10 py-4 text-lg font-semibold border-2 text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg bg-white/80 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #3B82F6, #8B5CF6) border-box',
                  border: '2px solid transparent'
                }}
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

            {/* Trust Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              {/* Avatar Row */}
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">A</div>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-violet-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">B</div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">C</div>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">+9.9K</div>
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

          {/* Right Column - Premium Visualization */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full max-w-2xl h-[500px] mx-auto">
              
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"></div>
              
              {/* Floating background elements */}
              <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-violet-200/20 to-violet-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
              
              {/* Central Glowing Orb */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Main Orb */}
                <div className="relative">
                  {/* Central glowing orb (blue→violet) */}
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 via-violet-500 to-violet-600 rounded-full shadow-2xl animate-pulse relative">
                    <div className="absolute inset-4 bg-white/20 rounded-full blur-sm"></div>
                    <div className="absolute inset-8 bg-white/40 rounded-full blur-sm"></div>
                    <div className="absolute inset-12 bg-white/60 rounded-full blur-sm animate-ping"></div>
                    <div className="absolute inset-16 bg-white/80 rounded-full"></div>
                    
                    {/* Network text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-black text-lg">NETWORK</span>
                    </div>
                  </div>
                  
                  {/* Rotating rings */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-200/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-violet-200/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-indigo-200/10 rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
                  
                  {/* Floating nodes with bounce and glowing shadows */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '0.5s', boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' }}>
                    <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '1s', boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }}>
                    <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '1.5s', boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)' }}>
                    <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '2s', boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}>
                    <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Connection lines */}
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
                  
                  {/* Floating data points */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping shadow-lg" style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)' }}></div>
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-violet-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '1s', boxShadow: '0 0 15px rgba(139, 92, 246, 0.8)' }}></div>
                  <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s', boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)' }}></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '3s', boxShadow: '0 0 15px rgba(236, 72, 153, 0.8)' }}></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-12 animate-float shadow-xl border border-white/30" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}></div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl -rotate-12 animate-float shadow-xl border border-white/30" style={{ animationDelay: '1s', boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' }}></div>
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