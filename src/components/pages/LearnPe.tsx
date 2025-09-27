"use client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, GraduationCap, BookOpen, Star, Users, Trophy, Clock, Video, Target } from "lucide-react";
import { useRouter } from "next/navigation";

interface LearnPeProps {
  onBack: () => void;
}

export function LearnPe() {
  const router = useRouter();
  const courses = [
    { name: "NEET/JEE Prep", students: "10K+", rating: 4.9, price: "₹2999/month" },
    { name: "Class 10-12 Tuition", students: "25K+", rating: 4.8, price: "₹1999/month" },
    { name: "Skill Development", students: "15K+", rating: 4.7, price: "₹999/month" },
    { name: "Language Learning", students: "8K+", rating: 4.8, price: "₹1499/month" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-violet-50 to-purple-50 overflow-hidden">
        <Button variant="ghost" onClick={() => router.back()} className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white">
          <ArrowLeft className="h-4 w-4 mr-2" />Back to Setu.plus
        </Button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-violet-100 rounded-full">
                  <GraduationCap className="h-8 w-8 text-violet-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">LearnPe</h1>
                  <p className="text-violet-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Learn, Grow, Succeed</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Quality education for everyone. From exam preparation to skill development, learn from India's best teachers and experts.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-lg px-8 py-4">
                  <BookOpen className="mr-2 h-5 w-5" />Start Learning
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-violet-200 hover:bg-violet-50 text-lg px-8 py-4">Browse Courses</Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Users className="h-4 w-4" /><span>100K+ students</span></div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /><span>4.8 learning rating</span></div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTg5NDU5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Online learning education" className="w-full h-auto rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-violet-600" />
                  <div><div className="font-semibold text-gray-900">Success Rate</div><div className="text-sm text-gray-600">95% pass rate</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-50/50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Popular Courses</h3>
            <p className="text-gray-600">Learn from the best teachers and achieve your goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-violet-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{course.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{course.students} students</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <p className="text-sm text-violet-600 font-medium mb-4">{course.price}</p>
                  <Button size="sm" className="bg-violet-600 hover:bg-violet-700">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Learn?</h3>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">Join thousands of successful students who achieved their dreams with LearnPe.</p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 text-lg px-8 py-4">
            <GraduationCap className="mr-2 h-5 w-5" />Start Learning Today
          </Button>
        </div>
      </section>
    </div>
  );
}