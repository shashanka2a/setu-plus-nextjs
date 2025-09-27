import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductOverview } from "@/components/ProductOverview";
import { AIFeatures } from "@/components/AIFeatures";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductOverview />
        <AIFeatures />
        <ComparisonTable />
      </main>
      <Footer />
    </div>
  );
}