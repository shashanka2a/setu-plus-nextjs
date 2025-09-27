import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function ProductCatalogue() {
  const categories = [
    {
      emoji: "🍴",
      title: "Food & Essentials",
      subApps: [
        "FoodPe – Restaurant delivery & takeaway",
        "KiranaPe – Groceries & daily essentials"
      ],
      gradient: "from-orange-500/10 to-red-500/10",
      border: "border-orange-200",
      hover: "hover:border-orange-300"
    },
    {
      emoji: "🛍️",
      title: "Commerce & Lifestyle",
      subApps: [
        "ShopPe – Marketplace for goods (new/used)",
        "RepairPe – Home services (repairs, cleaning, UC-style)",
        "SnapPe – Photography & creative services"
      ],
      gradient: "from-blue-500/10 to-indigo-500/10",
      border: "border-blue-200",
      hover: "hover:border-blue-300"
    },
    {
      emoji: "🚖",
      title: "Mobility & Experiences",
      subApps: [
        "RidePe – Carpooling & ride-sharing",
        "TicketPe – Event/movie ticket booking (BMS-style)",
        "EventPe – Event management & discovery"
      ],
      gradient: "from-purple-500/10 to-violet-500/10",
      border: "border-purple-200",
      hover: "hover:border-purple-300"
    },
    {
      emoji: "🏥",
      title: "Health & Learning",
      subApps: [
        "DocPe – Doctor consultation & medicine delivery",
        "LearnPe – Tutoring, test prep, and skills"
      ],
      gradient: "from-teal-500/10 to-cyan-500/10",
      border: "border-teal-200",
      hover: "hover:border-teal-300"
    }
  ];

  return (
    <section id="products" className="py-16 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore the Super App Verticals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One platform, infinite possibilities. Access everything you need across all aspects of digital commerce.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-2 ${category.border} ${category.hover} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10 text-center pb-3">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <div className="space-y-3">
                  {category.subApps.map((app, appIndex) => (
                    <div 
                      key={appIndex}
                      className="text-sm text-gray-700 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-gray-200/50 group-hover:bg-white/90 transition-all duration-300 leading-relaxed"
                    >
                      {app}
                    </div>
                  ))}
                </div>
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
            <span className="text-gray-700 font-medium">Building the future of integrated commerce</span>
          </div>
        </div>
      </div>
    </section>
  );
}