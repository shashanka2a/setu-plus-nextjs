"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Utensils, 
  ShoppingCart, 
  Store, 
  Wrench, 
  Camera, 
  Car, 
  Ticket, 
  Calendar, 
  Stethoscope, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";
import { useRouter } from "next/navigation";

export function ProductOverview() {
  const router = useRouter();
  const products = [
    {
      id: "foodpe",
      icon: Utensils,
      title: "FoodPe",
      tagline: "Restaurant delivery & takeaway made simple",
      gradient: "from-orange-500/10 to-red-500/10",
      border: "border-orange-200",
      hover: "hover:border-orange-300",
      iconColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    },
    {
      id: "kiranape",
      icon: ShoppingCart,
      title: "KiranaPe",
      tagline: "Groceries & daily essentials at your doorstep",
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-200",
      hover: "hover:border-green-300",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      id: "shoppe",
      icon: Store,
      title: "ShopPe",
      tagline: "Marketplace for new & used goods",
      gradient: "from-blue-500/10 to-indigo-500/10",
      border: "border-blue-200",
      hover: "hover:border-blue-300",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      id: "repairpe",
      icon: Wrench,
      title: "RepairPe",
      tagline: "Home services - plumber, electrician & more",
      gradient: "from-amber-500/10 to-yellow-500/10",
      border: "border-amber-200",
      hover: "hover:border-amber-300",
      iconColor: "text-amber-600",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    },
    {
      id: "snappe",
      icon: Camera,
      title: "SnapPe",
      tagline: "Photography & creative services",
      gradient: "from-purple-500/10 to-violet-500/10",
      border: "border-purple-200",
      hover: "hover:border-purple-300",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      id: "ridepe",
      icon: Car,
      title: "RidePe",
      tagline: "Carpooling & ride-sharing platform",
      gradient: "from-cyan-500/10 to-teal-500/10",
      border: "border-cyan-200",
      hover: "hover:border-cyan-300",
      iconColor: "text-cyan-600",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700"
    },
    {
      id: "ticketpe",
      icon: Ticket,
      title: "TicketPe",
      tagline: "Movie & concert ticket booking",
      gradient: "from-pink-500/10 to-rose-500/10",
      border: "border-pink-200",
      hover: "hover:border-pink-300",
      iconColor: "text-pink-600",
      buttonColor: "bg-pink-600 hover:bg-pink-700"
    },
    {
      id: "eventpe",
      icon: Calendar,
      title: "EventPe",
      tagline: "Event planning & management made easy",
      gradient: "from-indigo-500/10 to-purple-500/10",
      border: "border-indigo-200",
      hover: "hover:border-indigo-300",
      iconColor: "text-indigo-600",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700"
    },
    {
      id: "docpe",
      icon: Stethoscope,
      title: "DocPe",
      tagline: "Doctor consultations & medicine delivery",
      gradient: "from-teal-500/10 to-cyan-500/10",
      border: "border-teal-200",
      hover: "hover:border-teal-300",
      iconColor: "text-teal-600",
      buttonColor: "bg-teal-600 hover:bg-teal-700"
    },
    {
      id: "learnpe",
      icon: GraduationCap,
      title: "LearnPe",
      tagline: "Tutoring, test prep & skill development",
      gradient: "from-violet-500/10 to-purple-500/10",
      border: "border-violet-200",
      hover: "hover:border-violet-300",
      iconColor: "text-violet-600",
      buttonColor: "bg-violet-600 hover:bg-violet-700"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete ecosystem of apps designed to simplify your daily life and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className={`relative overflow-hidden border-2 ${product.border} ${product.hover} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group cursor-pointer animate-fade-in-up p-5`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10 pb-4 px-0">
                {/* Icon and Title side by side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className={`h-8 w-8 ${product.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg text-gray-900 font-semibold truncate">
                      {product.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.tagline}
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-3 px-0">
                <Button 
                  className={`w-full ${product.buttonColor} group-hover:shadow-lg transition-all duration-300 text-sm py-2.5`}
                  onClick={() => router.push(`/${product.id}`)}
                >
                  Go to {product.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-200 shadow-lg">
            <div className="flex -space-x-1">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <span className="text-gray-700 font-medium">One app, endless possibilities</span>
          </div>
        </div>
      </div>
    </section>
  );
}