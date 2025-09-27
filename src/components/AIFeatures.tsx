import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { UserPlus, Megaphone, BarChart3, MessageCircle } from "lucide-react";

export function AIFeatures() {
  const features = [
    {
      icon: UserPlus,
      title: "Smart Onboarding",
      description: "AI-guided setup process that gets your business online in minutes with automated product cataloging and store configuration.",
      color: "blue"
    },
    {
      icon: Megaphone,
      title: "Automated Marketing",
      description: "Intelligent campaigns that automatically optimize pricing, promote trending products, and target the right customers at the right time.",
      color: "violet"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced insights that forecast demand, identify growth opportunities, and help you make data-driven business decisions.",
      color: "indigo"
    },
    {
      icon: MessageCircle,
      title: "24/7 Multilingual Support",
      description: "AI-powered customer service that handles inquiries in multiple languages, processes orders, and resolves issues instantly.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      violet: "bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
    };
    return colors[color as keyof typeof colors];
  };

  const getGradientClasses = (color: string) => {
    const gradients = {
      blue: "from-blue-50/50 to-blue-100/30",
      violet: "from-violet-50/50 to-violet-100/30", 
      indigo: "from-indigo-50/50 to-indigo-100/30",
      purple: "from-purple-50/50 to-purple-100/30"
    };
    return gradients[color as keyof typeof gradients];
  };

  return (
    <section id="features" className="py-16 relative overflow-hidden">
      {/* Minimal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-violet-50/40"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-violet-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-violet-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent features that work around the clock to grow your business and delight your customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1 relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClasses(feature.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`inline-flex p-4 rounded-full mb-4 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">All AI features included in every plan</span>
          </div>
        </div>
      </div>
    </section>
  );
}