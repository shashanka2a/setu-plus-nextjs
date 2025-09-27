"use client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Stethoscope, 
  Clock, 
  Shield, 
  Star, 
  Users,
  Video,
  Pill,
  Calendar,
  Heart
} from "lucide-react";
import { useRouter } from "next/navigation";

interface DocPeProps {
  onBack: () => void;
}

export function DocPe() {
  const router = useRouter();
  const features = [
    {
      icon: Video,
      title: "Video Consultations",
      description: "Consult with doctors from home via video call"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Round-the-clock medical support"
    },
    {
      icon: Pill,
      title: "Medicine Delivery",
      description: "Prescribed medicines delivered to your door"
    },
    {
      icon: Shield,
      title: "Verified Doctors",
      description: "Certified and experienced healthcare professionals"
    }
  ];

  const specialists = [
    { name: "General Medicine", doctors: "500+", rating: 4.8 },
    { name: "Pediatrics", doctors: "200+", rating: 4.9 },
    { name: "Dermatology", doctors: "150+", rating: 4.7 },
    { name: "Gynecology", doctors: "180+", rating: 4.8 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-teal-50 to-cyan-50 overflow-hidden">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Setu.plus
        </Button>

        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-100 rounded-full">
                  <Stethoscope className="h-8 w-8 text-teal-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">DocPe</h1>
                  <p className="text-teal-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Healthcare at Your Fingertips
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Consult with qualified doctors online, get prescriptions, and have medicines delivered. 
                Quality healthcare made accessible and affordable for everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4">
                  <Video className="mr-2 h-5 w-5" />
                  Consult Now
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-teal-200 hover:bg-teal-50 text-lg px-8 py-4">
                  Find Doctors
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>1000+ verified doctors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 patient rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjb25zdWx0YXRpb24lMjB0ZWxlbWVkaWNpbmV8ZW58MXx8fHwxNzU4OTQ1OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Doctor consultation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-teal-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Book Instantly</div>
                    <div className="text-sm text-gray-600">Available 24/7</div>
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
              Why Choose DocPe?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience healthcare like never before with our comprehensive digital health platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-teal-100 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50/50 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Top Specialists
            </h3>
            <p className="text-gray-600">Consult with specialists across all medical fields</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialists.map((specialist, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Stethoscope className="h-8 w-8 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{specialist.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{specialist.doctors} doctors</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{specialist.rating}</span>
                  </div>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Consult
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Heart className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Trusted Healthcare</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Health, Our Priority
          </h3>
          
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get instant access to qualified doctors and healthcare services. 
            Your well-being is just a click away.
          </p>
          
          <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 text-lg px-8 py-4">
            <Video className="mr-2 h-5 w-5" />
            Start Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}