import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";

export default function MagneticParticleTesting() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Magnetic Particle Testing: Best Practices"
        description="Learn how magnetic particle testing detects surface and near-surface defects efficiently."
      />

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Magnetic Particle Testing: Best Practices</h1>
        <p className="text-muted-foreground mb-6">October 3, 2025</p>

        <section className="prose max-w-none">
          <p>
            Magnetic Particle Testing (MPT) is an NDT method used to detect
            surface and near-surface discontinuities in ferromagnetic materials.
          </p>

          <h2>Procedure</h2>
          <p>
            The part is magnetized and fine magnetic particles are applied. The
            particles gather at leakage fields caused by defects, making them
            visible for inspection.
          </p>

          <h2>Applications</h2>
          <ul>
            <li>Weld inspection</li>
            <li>Castings and forgings</li>
            <li>Automotive and aerospace components</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
