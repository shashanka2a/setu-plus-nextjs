"use client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Calendar, Star, Users, PartyPopper, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface EventPeProps {
  onBack: () => void;
}

export function EventPe() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
        <Button variant="ghost" onClick={() => router.back()} className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white">
          <ArrowLeft className="h-4 w-4 mr-2" />Back to Setu.plus
        </Button>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Calendar className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">EventPe</h1>
                  <p className="text-indigo-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Event Planning & Management Made Easy</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">From birthday parties to corporate events, we help you plan, organize, and execute memorable events. Professional planning, stress-free experience.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
                  <PartyPopper className="mr-2 h-5 w-5" />Plan Event
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-indigo-200 hover:bg-indigo-50 text-lg px-8 py-4">Browse Services</Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback src="https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NTg5NDU5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Event planning management" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Create Memories</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">Professional event planning services for unforgettable experiences.</p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-4">
            <Calendar className="mr-2 h-5 w-5" />Plan Your Event
          </Button>
        </div>
      </section>
    </div>
  );
}