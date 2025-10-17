import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";

export default function PenetrantTesting() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Penetrant Testing: Detecting Surface Defects"
        description="A deep dive into liquid penetrant testing and its role in non-destructive inspections."
      />

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Penetrant Testing: Detecting Surface Defects</h1>
        <p className="text-muted-foreground mb-6">October 12, 2025</p>

        <section className="prose max-w-none">
          <p>
            Liquid Penetrant Testing (PT) is used to reveal surface-breaking
            defects by applying a visible or fluorescent dye to the surface and
            then removing the excess to reveal indications.
          </p>
        </section>
      </main>
    </div>
  );
}
