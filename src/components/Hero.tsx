"use client";

import { Button } from "./ui/button";
import { Play, Loader2 } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleGetStarted = () => {
    setIsStartLoading(true);
    setTimeout(() => setIsStartLoading(false), 2000);
  };

  const handleDemo = () => {
    setIsDemoLoading(true);
    setTimeout(() => setIsDemoLoading(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-violet-50/30 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-violet-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-400/5 to-indigo-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">
          
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Brand Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 text-sm font-medium text-blue-700 shadow-sm animate-slide-in-left"
              style={{ animationDelay: ANIMATION_DELAYS.badge }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Setu.plus Platform
            </div>
            
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span 
                  className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 animate-slide-in-left"
                  style={{ animationDelay: ANIMATION_DELAYS.headline }}
                >
                  The
                </span>
                <span 
                  className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent animate-slide-in-right"
                  style={{ animationDelay: ANIMATION_DELAYS.headline }}
                >
                  Everything App
                </span>
                <span 
                  className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 animate-slide-in-left"
                  style={{ animationDelay: ANIMATION_DELAYS.headline }}
                >
                  for Digital Commerce
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p 
              className="text-xl md:text-2xl text-gray-600 max-w-2xl lg:mx-0 mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: ANIMATION_DELAYS.description }}
            >
              Democratizing commerce through AI-powered open networks.
            </p>
            
            {/* Quote */}
            <blockquote 
              className="text-lg md:text-xl text-gray-500 max-w-2xl lg:mx-0 mx-auto italic leading-relaxed animate-fade-in-up"
              style={{ animationDelay: ANIMATION_DELAYS.quote }}
            >
              "Building bridges that empower every business, every consumer, every community."
            </blockquote>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up"
              style={{ animationDelay: ANIMATION_DELAYS.buttons }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-8 py-4 min-w-[200px] h-14 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
                className="w-full sm:w-auto text-lg px-8 py-4 min-w-[200px] h-14 font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
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

          {/* Visual Section */}
          <div 
            className="relative group animate-fade-in-up"
            style={{ animationDelay: ANIMATION_DELAYS.visual }}
          >
            <div className="relative transform group-hover:scale-105 transition-all duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506555004127-c7f31038ba1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJyaWRnZSUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc1ODk0NTk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital Commerce Network Bridge"
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
              
              {/* Status Badges */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-blue-700">ONDC Ready</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-violet-700">AI Powered</span>
                </div>
              </div>
              
              {/* Connection Line */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 rounded-full opacity-80 animate-pulse group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 shadow-lg" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-violet-500 rounded-full animate-bounce opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 shadow-lg" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 -right-3 w-3 h-3 bg-indigo-500 rounded-full animate-bounce opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 shadow-lg" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}