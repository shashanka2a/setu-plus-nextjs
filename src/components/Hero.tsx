"use client";

import { Button } from "./ui/button";
import { ArrowRight, Play, Loader2 } from "lucide-react";
import { useState } from "react";

// Animation delays for staggered entrance
const ANIMATION_DELAYS = {
  badge: '0s',
  headline: '0.1s',
  description: '0.2s',
  buttons: '0.3s',
  visual: '0.4s'
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
    <section className="relative min-h-[90vh] bg-gradient-to-br from-white via-white to-blue-50/20 overflow-hidden">
      {/* CRED-inspired clean light background with soft gradient accent */}
      <div className="absolute inset-0">
        {/* Base clean white background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Soft gradient accent - white to subtle lavender/blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-blue-50/20"></div>
        
        {/* Subtle floating elements for depth */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-purple-100/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-100/10 to-blue-100/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Minimal dot pattern for texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E5E7EB' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Fullscreen container with wide margins */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] gap-24 lg:gap-32 items-center">
          
          {/* Left Column - CRED-inspired Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="max-w-3xl mx-auto lg:mx-0">
              
              {/* Trust Badge - Pill-shaped with gradient border */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 bg-white border border-blue-200/50 rounded-full px-8 py-4 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur-sm animate-fade-in-up" style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #3B82F6, #8B5CF6) border-box',
                  border: '1px solid transparent'
                }}>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  <span>Trusted by 10,000+ businesses</span>
                </div>
              </div>
              
              {/* CRED-inspired Aspirational Headline */}
              <div className="mb-10">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight text-gray-900">
                  The Network that Powers
                  <span className="block bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent mt-2">
                    Digital Commerce
                  </span>
                </h1>
              </div>
              
              {/* Premium Subheadline */}
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed mb-16 max-w-2xl font-light">
                AI-powered open networks connecting every business, consumer, and community.
              </p>
              
              {/* CRED-inspired CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-8 mb-16">
                {/* Primary CTA - Large gradient button with hover glow */}
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.7)] transform hover:scale-105 transition-all duration-300 h-20 min-w-[280px]"
                  onClick={handleGetStarted}
                  disabled={isStartLoading}
                >
                  {isStartLoading ? (
                    <>
                      <Loader2 className="mr-4 h-7 w-7 animate-spin" />
                      Getting Started...
                    </>
                  ) : (
                    <>
                      Get Started Free
                      <ArrowRight className="ml-4 h-7 w-7" />
                    </>
                  )}
                </Button>
                
                {/* Secondary CTA - Outlined with thin gradient border */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-xl px-12 py-8 rounded-2xl font-bold border-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg bg-white/95 backdrop-blur-sm h-20 min-w-[280px]" 
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #3B82F6, #8B5CF6) border-box',
                    border: '2px solid transparent'
                  }}
                  onClick={handleLearnMore}
                  disabled={isLearnLoading}
                >
                  {isLearnLoading ? (
                    <>
                      <Loader2 className="mr-4 h-7 w-7 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <Play className="mr-4 h-7 w-7" />
                      Watch Demo
                    </>
                  )}
                </Button>
              </div>
              
              {/* Credibility Row - Avatar group + rating */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-base text-gray-600 animate-fade-in-up">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-4 border-white shadow-xl"></div>
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-4 border-white shadow-xl"></div>
                    <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full border-4 border-white shadow-xl"></div>
                    <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white font-bold text-sm">
                      +9.9K
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex text-yellow-400 text-lg">
                      {'★'.repeat(5)}
                    </div>
                    <span className="font-semibold text-gray-700 text-lg">Trusted by 10,000+ businesses • 4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Network Illustration */}
          <div className="relative flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
            
            {/* CRED-inspired clean background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-blue-50/30 rounded-3xl shadow-2xl border border-white/40 backdrop-blur-sm"></div>
            
            {/* Subtle floating elements */}
            <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-blue-400/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-purple-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
            
            {/* Premium Network Orb Visualization */}
            <div className="relative z-10 w-full max-w-2xl h-full flex items-center justify-center">
              
              {/* Central Glowing Network Orb */}
              <div className="relative">
                {/* Main Orb - Large and prominent */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full shadow-2xl animate-pulse">
                  <div className="absolute inset-8 bg-white/20 rounded-full"></div>
                  <div className="absolute inset-16 bg-white/40 rounded-full"></div>
                  <div className="absolute inset-24 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute inset-32 bg-white/80 rounded-full animate-pulse"></div>
                  {/* Network text in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-black text-2xl">NETWORK</span>
                  </div>
                </div>
                
                {/* Flowing Gradient Rings */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-blue-200/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-200/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-112 h-112 border border-indigo-200/10 rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
                
                {/* Abstract AI Mesh Nodes */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute top-8 right-8 w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '1s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute bottom-8 left-8 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '1.5s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full shadow-xl animate-bounce border-2 border-white/50" style={{ animationDelay: '2s' }}>
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>
                
                {/* Flowing Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8"/>
                    </linearGradient>
                    <filter id="premiumGlow">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <line x1="250" y1="250" x2="150" y2="150" stroke="url(#premiumGradient)" strokeWidth="3" strokeDasharray="10,5" className="animate-pulse" filter="url(#premiumGlow)"/>
                  <line x1="250" y1="250" x2="350" y2="150" stroke="url(#premiumGradient)" strokeWidth="3" strokeDasharray="10,5" className="animate-pulse" style={{ animationDelay: '0.5s' }} filter="url(#premiumGlow)"/>
                  <line x1="250" y1="250" x2="150" y2="350" stroke="url(#premiumGradient)" strokeWidth="3" strokeDasharray="10,5" className="animate-pulse" style={{ animationDelay: '1s' }} filter="url(#premiumGlow)"/>
                  <line x1="250" y1="250" x2="350" y2="350" stroke="url(#premiumGradient)" strokeWidth="3" strokeDasharray="10,5" className="animate-pulse" style={{ animationDelay: '1.5s' }} filter="url(#premiumGlow)"/>
                </svg>
                
                {/* Floating Data Points */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }}></div>
                <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '1s', boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s', boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)' }}></div>
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '3s', boxShadow: '0 0 20px rgba(236, 72, 153, 0.8)' }}></div>
              </div>
              
              {/* Minimal floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-12 animate-float shadow-xl border border-white/30" style={{ boxShadow: '0 0 25px rgba(59, 130, 246, 0.4)' }}></div>
              <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl -rotate-12 animate-float shadow-xl border border-white/30" style={{ animationDelay: '1s', boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)' }}></div>
              <div className="absolute top-1/4 -right-16 w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full animate-float shadow-lg border border-white/30" style={{ animationDelay: '2s', boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}></div>
              
            </div>
            
            {/* Status Indicators - Minimal and clean */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/30">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)' }}></div>
                <span className="text-sm font-semibold text-gray-700">AI Active</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/30">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)' }}></div>
                <span className="text-sm font-semibold text-gray-700">Network Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}