"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Clock, 
  Truck, 
  Shield, 
  Percent,
  Package,
  Users,
  Star,
  CheckCircle
} from "lucide-react";
import { useRouter } from "next/navigation";

export function KiranaPe() {
  const router = useRouter();
  const features = [
    {
      icon: Clock,
      title: "Same Day Delivery",
      description: "Get your essentials delivered within hours"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Fresh products with quality guarantee"
    },
    {
      icon: Percent,
      title: "Best Prices",
      description: "Competitive prices with regular discounts"
    },
    {
      icon: Package,
      title: "Wide Selection",
      description: "10,000+ products across all categories"
    }
  ];

  const categories = [
    { name: "Fresh Vegetables", items: "500+ items", discount: "Up to 30% OFF" },
    { name: "Fruits", items: "200+ items", discount: "Fresh Daily" },
    { name: "Dairy Products", items: "150+ items", discount: "Buy 2 Get 1" },
    { name: "Pantry Staples", items: "800+ items", discount: "Bulk Discounts" },
    { name: "Personal Care", items: "300+ items", discount: "Up to 40% OFF" },
    { name: "Household Items", items: "400+ items", discount: "Free Delivery" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
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
          <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-emerald-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <ShoppingCart className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">KiranaPe</h1>
                  <p className="text-green-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Your Daily Essentials, Delivered Fresh
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Shop for groceries, vegetables, fruits, and household essentials from the comfort of your home. 
                Fresh products, competitive prices, and lightning-fast delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                  <Package className="mr-2 h-5 w-5" />
                  Shop Essentials
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-green-200 hover:bg-green-50 text-lg px-8 py-4">
                  Browse Categories
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>100,000+ families served</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 average rating</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBtYXJrZXR8ZW58MXx8fHwxNzU4OTQ1OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Grocery shopping"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Fresh Guarantee</div>
                    <div className="text-sm text-gray-600">100% quality assured</div>
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
              Why Choose KiranaPe?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring the best of your local kirana store online with added convenience and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-green-50/50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h3>
            <p className="text-gray-600">Everything you need for your home and family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-green-100 to-emerald-100 relative">
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {category.discount}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <div className="text-sm font-medium text-gray-900">{category.items}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Fresh & Quality</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Truck className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Free Delivery Available</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Shopping Today
          </h3>
          
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get all your daily essentials delivered fresh to your doorstep. 
            Quality products, great prices, and reliable service.
          </p>
          
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Shop Essentials Now
          </Button>
        </div>
      </section>
    </div>
  );
}