"use client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Car, Clock, DollarSign, Star, Users, MapPin, Shield, Fuel } from "lucide-react";
import { useRouter } from "next/navigation";

interface RidePeProps {
  onBack: () => void;
}

export function RidePe() {
  const router = useRouter();
  const features = [
    { icon: DollarSign, title: "Save Money", description: "Share costs with fellow travelers" },
    { icon: Shield, title: "Safe Travel", description: "Verified drivers and secure rides" },
    { icon: Fuel, title: "Eco-Friendly", description: "Reduce carbon footprint together" },
    { icon: Users, title: "Meet People", description: "Connect with like-minded travelers" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-cyan-50 to-teal-50 overflow-hidden">
        <Button variant="ghost" onClick={() => router.back()} className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white">
          <ArrowLeft className="h-4 w-4 mr-2" />Back to Setu.plus
        </Button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-100 rounded-full">
                  <Car className="h-8 w-8 text-cyan-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">RidePe</h1>
                  <p className="text-cyan-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Smart Carpooling & Ride Sharing</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Travel together, save money, and make new connections. Join India's most trusted carpooling network for daily commutes and long trips.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-lg px-8 py-4">
                  <MapPin className="mr-2 h-5 w-5" />Find a Ride
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-cyan-200 hover:bg-cyan-50 text-lg px-8 py-4">Offer a Ride</Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Users className="h-4 w-4" /><span>500K+ active riders</span></div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /><span>4.7 safety rating</span></div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwb29sJTIwcmlkZSUyMHNoYXJpbmd8ZW58MXx8fHwxNzU4OTQ1OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Carpooling ride sharing" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose RidePe?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the future of shared mobility with our smart and sustainable ride-sharing platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-cyan-100 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Share the Journey?</h3>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">Join our community of smart travelers. Save money, meet people, and travel sustainably.</p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 text-lg px-8 py-4">
            <Car className="mr-2 h-5 w-5" />Find Your Ride
          </Button>
        </div>
      </section>
    </div>
  );
}