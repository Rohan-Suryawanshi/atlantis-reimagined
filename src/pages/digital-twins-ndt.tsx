import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";

export default function DigitalTwinsNDT() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Digital Twins in NDT: Transforming Asset Management"
        description="Explore how digital twins and VR/AR technology improve NDT processes and training."
      />

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Digital Twins in NDT: Transforming Asset Management</h1>
        <p className="text-muted-foreground mb-6">October 15, 2025</p>

        <section className="prose max-w-none">
          <p>
            Digital twins combine sensor data, models, and visualization to
            create a live representation of physical assets. In NDT, they can
            be used for simulation, planning inspections, and training.
          </p>
        </section>
      </main>
    </div>
  );
}
