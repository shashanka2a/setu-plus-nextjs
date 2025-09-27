"use client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Ticket, Star, Users, Calendar, Music } from "lucide-react";
import { useRouter } from "next/navigation";

interface TicketPeProps {
  onBack: () => void;
}

export function TicketPe() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-pink-50 to-rose-50 overflow-hidden">
        <Button variant="ghost" onClick={() => router.back()} className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white">
          <ArrowLeft className="h-4 w-4 mr-2" />Back to Setu.plus
        </Button>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-100 rounded-full">
                  <Ticket className="h-8 w-8 text-pink-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">TicketPe</h1>
                  <p className="text-pink-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Book Tickets for Movies & Events</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Your one-stop destination for movie tickets, concert bookings, and event reservations. Best seats, best prices, guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-4">
                  <Calendar className="mr-2 h-5 w-5" />Book Tickets
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-pink-200 hover:bg-pink-50 text-lg px-8 py-4">Browse Events</Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback src="https://images.unsplash.com/photo-1489599243109-49327270c05d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRpY2tldCUyMGJvb2tpbmd8ZW58MXx8fHwxNzU4OTQ1OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Movie ticket booking" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Entertainment?</h3>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">Book your tickets now and enjoy the best entertainment experiences.</p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 text-lg px-8 py-4">
            <Ticket className="mr-2 h-5 w-5" />Book Now
          </Button>
        </div>
      </section>
    </div>
  );
}