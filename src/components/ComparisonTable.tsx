import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";

export function ComparisonTable() {
  const features = [
    { name: "AI-Powered Product Matching", setu: true, competitor1: false, competitor2: false, competitor3: true },
    { name: "Dynamic Pricing Engine", setu: true, competitor1: true, competitor2: false, competitor3: false },
    { name: "24/7 AI Customer Support", setu: true, competitor1: false, competitor2: true, competitor3: false },
    { name: "Predictive Analytics", setu: true, competitor1: false, competitor2: false, competitor3: true },
    { name: "Multi-language Support", setu: true, competitor1: true, competitor2: true, competitor3: false },
    { name: "Real-time Inventory Sync", setu: true, competitor1: true, competitor2: false, competitor3: true },
    { name: "Advanced Security", setu: true, competitor1: true, competitor2: true, competitor3: true },
    { name: "Mobile-First Design", setu: true, competitor1: false, competitor2: true, competitor3: false },
    { name: "API Integration", setu: true, competitor1: true, competitor2: false, competitor3: true },
    { name: "Custom Branding", setu: true, competitor1: false, competitor2: false, competitor3: false }
  ];

  return (
    <section id="comparison" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Setu.plus?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our comprehensive feature set against leading competitors and see why thousands choose Setu.plus.
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-gray-100">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-violet-50 border-b">
            <CardTitle className="text-center text-2xl text-gray-900">
              Feature Comparison
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 min-w-[200px]">Features</th>
                    <th className="text-center p-4 font-semibold text-blue-600 min-w-[120px]">
                      <div className="flex flex-col items-center">
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-bold">
                          Setu.plus
                        </span>
                        <span className="text-xs text-gray-500 mt-1">Us</span>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-600 min-w-[120px]">
                      <div className="flex flex-col items-center">
                        <span>Platform A</span>
                        <span className="text-xs text-gray-500 mt-1">Competitor</span>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-600 min-w-[120px]">
                      <div className="flex flex-col items-center">
                        <span>Platform B</span>
                        <span className="text-xs text-gray-500 mt-1">Competitor</span>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-600 min-w-[120px]">
                      <div className="flex flex-col items-center">
                        <span>Platform C</span>
                        <span className="text-xs text-gray-500 mt-1">Competitor</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className={`border-b ${index % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                      <td className="p-4 text-gray-900">{feature.name}</td>
                      <td className="p-4 text-center">
                        {feature.setu ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.competitor1 ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.competitor2 ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.competitor3 ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-violet-50 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-8 py-3">
                Start Your Free Trial
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}