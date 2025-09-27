import { Card, CardContent } from "./ui/card";
import { ArrowRight, Users, Zap, Target, Globe } from "lucide-react";

export function BusinessModel() {
  const models = [
    {
      icon: Users,
      title: "Network Effects",
      description: "More sellers attract more buyers, creating a virtuous cycle of growth",
      color: "blue"
    },
    {
      icon: Zap,
      title: "AI-First Approach",
      description: "Every interaction is optimized by AI to improve experiences and outcomes",
      color: "violet"
    },
    {
      icon: Target,
      title: "Open Commerce",
      description: "Built on ONDC principles for interoperability and fair competition",
      color: "indigo"
    },
    {
      icon: Globe,
      title: "Super App Vision",
      description: "One platform for all commerce needs, from food to finance",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      violet: "text-violet-600 bg-violet-100",
      indigo: "text-indigo-600 bg-indigo-100",
      purple: "text-purple-600 bg-purple-100"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Business Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a sustainable ecosystem that benefits everyone in the commerce value chain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {models.map((model, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`inline-flex p-4 rounded-full mb-4 ${getColorClasses(model.color)}`}>
                  <model.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {model.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {model.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue Streams */}
        <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Revenue Streams</h3>
            <p className="text-gray-600">Multiple revenue channels ensure sustainable growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900 mb-2">Transaction Fees</div>
              <div className="text-sm text-gray-600">Small percentage on successful transactions</div>
              <div className="text-blue-600 font-medium mt-2">1-2% per transaction</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900 mb-2">Premium Features</div>
              <div className="text-sm text-gray-600">Advanced AI tools and analytics</div>
              <div className="text-violet-600 font-medium mt-2">₹299-999/month</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900 mb-2">Partner Services</div>
              <div className="text-sm text-gray-600">Logistics, payments, and financial services</div>
              <div className="text-indigo-600 font-medium mt-2">Revenue sharing</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <span>Ready to be part of the future?</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}