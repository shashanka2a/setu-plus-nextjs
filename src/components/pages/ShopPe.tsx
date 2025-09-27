"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Store, 
  TrendingUp, 
  Shield, 
  Users, 
  Star,
  Search,
  Tag,
  Package,
  CreditCard
} from "lucide-react";
import { useRouter } from "next/navigation";

export function ShopPe() {
  const router = useRouter();
  const features = [
    {
      icon: TrendingUp,
      title: "Easy Selling",
      description: "List your products in minutes, reach millions"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Safe transactions with buyer protection"
    },
    {
      icon: Search,
      title: "Smart Discovery",
      description: "AI-powered search helps buyers find you"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a thriving marketplace community"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Setu.plus
        </Button>

        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Store className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">ShopPe</h1>
                  <p className="text-blue-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Buy & Sell Anything, Anywhere
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                India's most trusted marketplace for new and used goods. Buy from verified sellers, 
                sell your items easily, and discover great deals every day.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Package className="mr-2 h-5 w-5" />
                  Start Selling
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:bg-blue-50 text-lg px-8 py-4">
                  Browse Products
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>2M+ active users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.7 marketplace rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRwbGFjZSUyMHNob3BwaW5nJTIwb25saW5lfGVufDF8fHx8MTc1ODk0NTk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Online marketplace"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Tag className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Best Deals</div>
                    <div className="text-sm text-gray-600">Up to 70% off</div>
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
              Why Choose ShopPe?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're buying or selling, we make online commerce simple, safe, and profitable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <CreditCard className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Secure Transactions</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start?
          </h3>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of users buying and selling on India's most trusted marketplace.
          </p>
          
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
            <Store className="mr-2 h-5 w-5" />
            Start Selling Today
          </Button>
        </div>
      </section>
    </div>
  );
}