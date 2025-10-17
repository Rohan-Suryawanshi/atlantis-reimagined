import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";

export default function EddyCurrentTesting() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Eddy Current Testing Explained"
        description="An introduction to eddy current testing and its applications in quality control."
      />

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Eddy Current Testing Explained</h1>
        <p className="text-muted-foreground mb-6">October 10, 2025</p>

        <section className="prose max-w-none">
          <p>
            Eddy Current Testing (ECT) uses electromagnetic induction to detect
            surface and near-surface defects in conductive materials. It is a
            fast and contact-based method commonly used in heat exchanger and
            tubing inspections.
          </p>
        </section>
      </main>
    </div>
  );
}
