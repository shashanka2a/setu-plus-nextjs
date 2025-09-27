"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Wrench, Clock, Shield, Star, Users, Zap, Home, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function RepairPe() {
  const router = useRouter();
  const services = [
    { name: "Plumbing", professionals: "500+", rating: 4.8, price: "₹199 onwards" },
    { name: "Electrical", professionals: "400+", rating: 4.9, price: "₹149 onwards" },
    { name: "AC Repair", professionals: "300+", rating: 4.7, price: "₹299 onwards" },
    { name: "Appliance Repair", professionals: "250+", rating: 4.8, price: "₹179 onwards" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-amber-50 to-yellow-50 overflow-hidden">
        <Button variant="ghost" onClick={() => router.back()} className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white">
          <ArrowLeft className="h-4 w-4 mr-2" />Back to Setu.plus
        </Button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Wrench className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">RepairPe</h1>
                  <p className="text-amber-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Home Services at Your Doorstep</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Expert technicians for all your home repair needs. From plumbing to electrical work, we've got you covered with verified professionals.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                  <Home className="mr-2 h-5 w-5" />Book Service
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-amber-200 hover:bg-amber-50 text-lg px-8 py-4">Browse Services</Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Users className="h-4 w-4" /><span>5000+ verified professionals</span></div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /><span>4.8 service rating</span></div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVwYWlyJTIwc2VydmljZXN8ZW58MXx8fHwxNzU4OTQ1OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Home repair services" className="w-full h-auto rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <div><div className="font-semibold text-gray-900">Same Day Service</div><div className="text-sm text-gray-600">Available</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50/50 to-yellow-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Popular Services</h3>
            <p className="text-gray-600">Expert solutions for all your home maintenance needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Wrench className="h-8 w-8 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{service.professionals} professionals</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                  <p className="text-sm text-amber-600 font-medium mb-4">{service.price}</p>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Home Repairs?</h3>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">Get reliable, professional home services at affordable prices. Quality work guaranteed.</p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 text-lg px-8 py-4">
            <Wrench className="mr-2 h-5 w-5" />Book Service Now
          </Button>
        </div>
      </section>
    </div>
  );
}