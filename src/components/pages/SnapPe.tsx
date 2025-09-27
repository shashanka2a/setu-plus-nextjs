"use client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Camera, Star, Users, Image, Video } from "lucide-react";
import { useRouter } from "next/navigation";

interface SnapPeProps {
  onBack: () => void;
}

export function SnapPe() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-purple-50 to-violet-50 overflow-hidden">
        <Button variant="ghost" onClick={() => router.back()} className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white">
          <ArrowLeft className="h-4 w-4 mr-2" />Back to Setu.plus
        </Button>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Camera className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">SnapPe</h1>
                  <p className="text-purple-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Professional Photography & Creative Services</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Connect with talented photographers and creative professionals for all your visual needs. From weddings to corporate events, we capture your special moments.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                  <Camera className="mr-2 h-5 w-5" />Hire Photographer
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-purple-200 hover:bg-purple-50 text-lg px-8 py-4">View Portfolio</Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback src="https://images.unsplash.com/photo-1554048612-b6a482b224ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHNlcnZpY2VzfGVufDF8fHx8MTc1ODk0NTk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Photography services" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Capture Your Moments</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">Professional photography services for every occasion. Quality guaranteed.</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4">
            <Camera className="mr-2 h-5 w-5" />Book Now
          </Button>
        </div>
      </section>
    </div>
  );
}