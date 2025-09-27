import { Card, CardContent, CardHeader } from "./ui/card";
import { Star, Quote } from "lucide-react";

export function SuccessStories() {
  const stories = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Electronics",
      location: "Delhi",
      story: "Setu.plus helped us reach customers across India. Our sales increased by 300% in just 6 months through the ONDC network.",
      rating: 5,
      growth: "300% increase in sales"
    },
    {
      name: "Priya Sharma",
      business: "Fresh Farm Produce",
      location: "Punjab",
      story: "The AI tools automatically manage our inventory and pricing. We save 10 hours per week and our profits have doubled.",
      rating: 5,
      growth: "100% increase in profits"
    },
    {
      name: "Mohammed Ali",
      business: "Ali Textiles",
      location: "Gujarat",
      story: "From a local shop to serving customers nationwide. The multilingual support helps us connect with diverse customers.",
      rating: 5,
      growth: "5x customer base growth"
    }
  ];

  return (
    <section id="stories" className="py-16 bg-gradient-to-br from-blue-50/50 to-violet-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real businesses, real growth. See how MSMEs are thriving with Setu.plus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="h-8 w-8" />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.business}</p>
                    <p className="text-xs text-gray-500">{story.location}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                  "{story.story}"
                </blockquote>
                
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-violet-100 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">{story.growth}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Active Sellers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600 mb-2">2M+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">₹500Cr+</div>
              <div className="text-gray-600">Transaction Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">28 States</div>
              <div className="text-gray-600">Pan-India Presence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}