import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";

export default function VisualTesting() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Visual Testing Techniques for Modern NDT"
        description="A guide to direct and remote visual inspection methods for industrial assets."
      />

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Visual Testing Techniques for Modern NDT</h1>
        <p className="text-muted-foreground mb-6">October 5, 2025</p>

        <section className="prose max-w-none">
          <p>
            Visual Testing (VT) is the most basic form of NDT and often the
            first step in any inspection. It ranges from simple direct
            observation to advanced remote systems with cameras and drones.
          </p>

          <h2>Tools & Techniques</h2>
          <ul>
            <li>Direct visual inspection</li>
            <li>Borescopes and videoscopes</li>
            <li>Drone-based inspections for hard-to-reach areas</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
