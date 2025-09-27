"use client";

import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const router = useRouter();

  const products = [
    { id: "foodpe", name: "FoodPe", description: "Food delivery" },
    { id: "kiranape", name: "KiranaPe", description: "Groceries & essentials" },
    { id: "shoppe", name: "ShopPe", description: "Marketplace" },
    { id: "repairpe", name: "RepairPe", description: "Home services" },
    { id: "snappe", name: "SnapPe", description: "Photography" },
    { id: "ridepe", name: "RidePe", description: "Ride sharing" },
    { id: "ticketpe", name: "TicketPe", description: "Ticket booking" },
    { id: "eventpe", name: "EventPe", description: "Event planning" },
    { id: "docpe", name: "DocPe", description: "Healthcare" },
    { id: "learnpe", name: "LearnPe", description: "Education" }
  ];

  const handleProductClick = (productId: string) => {
    router.push(`/${productId}`);
    setIsProductsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Setu.plus
              </span>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Home
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {products.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductClick(product.id)}
                          className="text-left p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-600">{product.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">AI Advantage</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">Contact</a>
            </div>
          </nav>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Button variant="ghost" className="hover:scale-105 transition-all duration-300">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Products</div>
                <div className="grid grid-cols-1 gap-1">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="text-left px-2 py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {product.name} - {product.description}
                    </button>
                  ))}
                </div>
              </div>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">AI Advantage</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}