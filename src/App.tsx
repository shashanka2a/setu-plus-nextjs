import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductOverview } from "./components/ProductOverview";
import { AIFeatures } from "./components/AIFeatures";
import { ComparisonTable } from "./components/ComparisonTable";
import { Footer } from "./components/Footer";

// Product Pages
import { FoodPe } from "./pages/FoodPe";
import { KiranaPe } from "./pages/KiranaPe";
import { ShopPe } from "./pages/ShopPe";
import { RepairPe } from "./pages/RepairPe";
import { SnapPe } from "./pages/SnapPe";
import { RidePe } from "./pages/RidePe";
import { TicketPe } from "./pages/TicketPe";
import { EventPe } from "./pages/EventPe";
import { DocPe } from "./pages/DocPe";
import { LearnPe } from "./pages/LearnPe";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleProductClick = (productId: string) => {
    setCurrentPage(productId);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  // Render product pages
  if (currentPage === "foodpe") {
    return <FoodPe onBack={handleBackToHome} />;
  }
  if (currentPage === "kiranape") {
    return <KiranaPe onBack={handleBackToHome} />;
  }
  if (currentPage === "shoppe") {
    return <ShopPe onBack={handleBackToHome} />;
  }
  if (currentPage === "repairpe") {
    return <RepairPe onBack={handleBackToHome} />;
  }
  if (currentPage === "snappe") {
    return <SnapPe onBack={handleBackToHome} />;
  }
  if (currentPage === "ridepe") {
    return <RidePe onBack={handleBackToHome} />;
  }
  if (currentPage === "ticketpe") {
    return <TicketPe onBack={handleBackToHome} />;
  }
  if (currentPage === "eventpe") {
    return <EventPe onBack={handleBackToHome} />;
  }
  if (currentPage === "docpe") {
    return <DocPe onBack={handleBackToHome} />;
  }
  if (currentPage === "learnpe") {
    return <LearnPe onBack={handleBackToHome} />;
  }

  // Render home page
  return (
    <div className="min-h-screen bg-white">
      <Header onNavigation={handleNavigation} />
      <main>
        <Hero />
        <ProductOverview onProductClick={handleProductClick} />
        <AIFeatures />
        <ComparisonTable />
      </main>
      <Footer />
    </div>
  );
}