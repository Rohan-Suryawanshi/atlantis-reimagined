import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";

export default function UltrasonicTesting() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Understanding Ultrasonic Testing in NDT"
        description="Explore how ultrasonic testing helps detect internal flaws in materials without causing damage."
      />

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Understanding Ultrasonic Testing in NDT</h1>
        <p className="text-muted-foreground mb-6">October 1, 2025</p>

        <section className="prose max-w-none">
          <p>
            Ultrasonic testing (UT) uses high-frequency sound waves to detect
            internal flaws in materials. It is widely used for thickness
            measurements, weld inspections, and finding cracks or inclusions.
          </p>

          <h2>How it works</h2>
          <p>
            A transducer sends ultrasonic pulses into the material and listens
            for echoes. Reflections from discontinuities are recorded and
            analyzed to determine defect size and location.
          </p>

          <h2>Advantages</h2>
          <ul>
            <li>High sensitivity to small flaws</li>
            <li>Depth information available</li>
            <li>No ionizing radiation</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            Requires skilled operators and good surface coupling. Complex
            geometries can make interpretation harder.
          </p>
        </section>
      </main>
    </div>
  );
}
