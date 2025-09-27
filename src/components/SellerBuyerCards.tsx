import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Store, 
  ShoppingCart, 
  ArrowRight, 
  CreditCard,
  Database,
  Bot,
  Globe,
  TrendingDown,
  Search,
  ShieldCheck,
  MapPin
} from "lucide-react";

export function SellerBuyerCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Value Proposition
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering MSMEs and delighting buyers with intelligent commerce solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sellers Card - MSMEs */}
          <Card className="relative overflow-hidden border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Store className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">For Sellers</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">MSMEs & Small Businesses</p>
                </div>
              </div>
              <p className="text-gray-600">
                Join India's digital commerce revolution with tools designed for your success.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Low Fees</div>
                    <div className="text-sm text-gray-600">Minimal transaction costs to maximize your profits</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Data Ownership</div>
                    <div className="text-sm text-gray-600">Your customer data remains yours, always</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bot className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">AI Assistance</div>
                    <div className="text-sm text-gray-600">Smart tools for pricing, inventory, and marketing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Universal Reach</div>
                    <div className="text-sm text-gray-600">Access to ONDC network and beyond</div>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
                Start Selling
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Buyers Card */}
          <Card className="relative overflow-hidden border-2 hover:border-violet-200 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-violet-600/20 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-violet-100 rounded-lg">
                  <ShoppingCart className="h-8 w-8 text-violet-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">For Buyers</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">Smart Shopping Experience</p>
                </div>
              </div>
              <p className="text-gray-600">
                Discover products with better prices, wider choice, and complete transparency.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Better Prices</div>
                    <div className="text-sm text-gray-600">Direct from sellers, no middleman markup</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Search className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Wider Choice</div>
                    <div className="text-sm text-gray-600">Access to diverse products across the ONDC network</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Transparent Shopping</div>
                    <div className="text-sm text-gray-600">Clear pricing, reviews, and seller information</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Local Discovery</div>
                    <div className="text-sm text-gray-600">Find nearby sellers and support local businesses</div>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-violet-600 hover:bg-violet-700 mt-6">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}