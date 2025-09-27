"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Clock, 
  Star, 
  MapPin, 
  Utensils, 
  Truck, 
  Shield, 
  Heart,
  ChefHat,
  Users
} from "lucide-react";
import { useRouter } from "next/navigation";

export function FoodPe() {
  const router = useRouter();
  const features = [
    {
      icon: Clock,
      title: "30-min Delivery",
      description: "Fast delivery from your favorite restaurants"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Top-rated restaurants and cuisines"
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Real-time order tracking and updates"
    },
    {
      icon: Shield,
      title: "Safe & Hygienic",
      description: "Contactless delivery with safety protocols"
    }
  ];

  const restaurants = [
    { name: "Biryani House", rating: 4.5, time: "25-30 min", cuisine: "Indian", offers: "20% OFF" },
    { name: "Pizza Corner", rating: 4.3, time: "30-35 min", cuisine: "Italian", offers: "Free Delivery" },
    { name: "Burger King", rating: 4.2, time: "20-25 min", cuisine: "Fast Food", offers: "Buy 1 Get 1" },
    { name: "Sushi Station", rating: 4.7, time: "35-40 min", cuisine: "Japanese", offers: "15% OFF" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Setu.plus
        </Button>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-red-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Utensils className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">FoodPe</h1>
                  <p className="text-orange-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Delicious Food Delivered Fast
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep. 
                Fast delivery, great taste, unbeatable prices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                  <ChefHat className="mr-2 h-5 w-5" />
                  Order Now
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-orange-200 hover:bg-orange-50 text-lg px-8 py-4">
                  View Menu
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>50,000+ happy customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8 average rating</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjByZXN0YXVyYW50fGVufDF8fHx8MTc1ODk0NTk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Food delivery"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Truck className="h-6 w-6 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Free Delivery</div>
                    <div className="text-sm text-gray-600">On orders above ₹299</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose FoodPe?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make food delivery simple, fast, and delicious with our premium service features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-orange-100 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="py-16 bg-gradient-to-br from-orange-50/50 to-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Popular Restaurants
            </h3>
            <p className="text-gray-600">Order from top-rated restaurants in your area</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-orange-100 to-red-100 relative">
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {restaurant.offers}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{restaurant.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {restaurant.time}
                    </span>
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Heart className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Loved by Food Lovers</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h3>
          
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust FoodPe for their daily meals. 
            Fresh food, fast delivery, great prices.
          </p>
          
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4">
            <ChefHat className="mr-2 h-5 w-5" />
            Start Ordering Now
          </Button>
        </div>
      </section>
    </div>
  );
}