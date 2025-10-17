import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";

export default function RadiographicTesting() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Radiographic Testing in Industrial Applications"
        description="Understand X-ray and gamma ray techniques for internal flaw detection and weld inspections."
      />

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Radiographic Testing in Industrial Applications</h1>
        <p className="text-muted-foreground mb-6">October 7, 2025</p>

        <section className="prose max-w-none">
          <p>
            Radiographic Testing (RT) uses X-rays or gamma rays to view the
            internal structure of components. It is especially useful for
            weld inspections and detecting internal defects.
          </p>

          <h2>Safety</h2>
          <p>
            Because RT uses ionizing radiation, strict safety protocols and
            trained personnel are required to conduct inspections.
          </p>
        </section>
      </main>
    </div>
  );
}
