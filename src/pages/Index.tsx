import { Hero } from '@/components/Hero';
import { AnimatedStats } from '@/components/AnimatedStats';
import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CursorFollower } from '@/components/CursorFollower';
import { Navigation } from '@/components/Navigation';

export default function Index() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Atlantis NDT",
    "url": "https://atlantisndt.com",
    "logo": "https://atlantisndt.com/logo.png",
    "description": "Leading provider of Non-Destructive Testing services, training, and consultancy with state-of-the-art equipment and certified methodologies.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "North America"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://linkedin.com/company/atlantis-ndt",
      "https://twitter.com/atlantisndt"
    ]
  };
  const services = [
    {
      title: "Inspection Services",
      description: "Comprehensive NDT testing with certified Level III professionals.",
      features: ["Ultrasonic Testing", "Radiographic Testing", "Magnetic Particle", "Visual Inspection"]
    },
    {
      title: "Training Programs",
      description: "Industry-recognized certification programs from Level I to Level III.",
      features: ["VR/AR Enhanced", "Hands-on Practice", "Expert Instructors", "95% Success Rate"]
    },
    {
      title: "Expert Consultation",
      description: "Technical advisory services for complex inspection challenges.",
      features: ["Procedure Development", "Code Compliance", "Risk Assessment", "Digital Twins"]
    }
  ];

  const testimonials = [
    {
      name: "Thomas Crowe",
      rating: 4,
      text: "I've taken Atlantis has great Inspection services its been a pleasure working with them."
    },
    {
      name: "K. Subramanian", 
      rating: 4,
      text: "Atlantis team trained our guys to Level II and we're extremely satisfied to collaborate with them"
    },
    {
      name: "Haziq Muhammad",
      rating: 5,
      text: "It's been a pleasure meeting with Mr. Anoop. He's a very passionate professional. He assisted us throughout the inspection of our underground tanks."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation/>
      <SEOHead 
        title="Home"
        description="Atlantis NDT - Leading provider of Non-Destructive Testing services with 50+ certified professionals. Specializing in ultrasonic, radiographic, magnetic particle, and penetrant testing across oil & gas, marine, aerospace, and nuclear industries."
        keywords="NDT services, Non-Destructive Testing, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, eddy current testing, visual testing, asset integrity, quality assurance"
        structuredData={structuredData}
      />
      <Hero />
      <AnimatedStats />
      <CursorFollower/>
      
      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Challenging <span className="gradient-text">Inspection Problem?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive NDT solutions cover every aspect of non-destructive testing,
              from complex inspections to professional training and expert consultation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover-scale border-0 shadow-md group">
                  <CardHeader>
                    <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Twins CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Digital Twins</span> Technology
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay up to date with Atlantis's technological advancements. We offer VR/AR 
              or web-based Digital Twins used for asset integrity and enhanced learning programs in NDT.
            </p>
            <Button className="btn-primary group">
              Explore Digital Twins
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Reviews</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear what our clients say about our NDT services and training programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precision. Quality. Trust in NDT
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Your partner in NDT Excellence. We'd love to hear from you.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
