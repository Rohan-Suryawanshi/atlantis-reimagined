import { motion } from 'framer-motion';
import { Users, Award, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Navigation } from '@/components/Navigation';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Accurate testing with state-of-the-art equipment and certified methodologies."
    },
    {
      icon: Award,
      title: "Quality",
      description: "ISO certified processes ensuring the highest standards in NDT services."
    },
    {
      icon: Users,
      title: "Expertise",
      description: "50+ certified professionals with Level III qualifications and industry experience."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Cutting-edge technology including VR/AR digital twins for enhanced training."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Atlantis NDT",
    "description": "Leading provider of Non-Destructive Testing services with over 50 years of collective experience",
    "foundingDate": "2015",
    "numberOfEmployees": "50+",
    "serviceArea": "North America",
    "expertise": ["Oil & Gas", "Marine", "Aerospace", "Nuclear", "Energy"],
    "award": "ISO Certified NDT Services"
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation/>
      <SEOHead 
        title="About Us"
        description="Learn about Atlantis NDT - Leading provider of Non-Destructive Testing services with 50+ certified professionals and Level III qualifications. Over 50 years of collective experience in oil & gas, marine, aerospace, and nuclear industries."
        keywords="about Atlantis NDT, NDT company history, certified NDT professionals, Level III consultants, NDT expertise, oil gas marine aerospace nuclear"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Atlantis NDT</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Leading provider of Non-Destructive Testing services, training, and consultancy 
              with over 50 years of collective experience in the industry.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to provide excellence in Non-Destructive Testing, 
                Atlantis NDT has grown to become one of North America's most trusted 
                NDT service providers. Our team combines decades of expertise with 
                cutting-edge technology to deliver unparalleled service quality.
              </p>
              <p className="text-lg text-muted-foreground">
                With exposure across oil & gas, marine, energy, aerospace, and nuclear 
                industries, we bring comprehensive knowledge and proven methodologies 
                to every project.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-4xl font-bold mb-4">7+</h3>
                  <p className="text-xl mb-6">Years of Excellence</p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Projects Completed</span>
                      <span className="font-bold">1000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certified Experts</span>
                      <span className="font-bold">50+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level III Consultants</span>
                      <span className="font-bold">10+</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and ensure exceptional service delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-scale border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our team of Level III certified professionals with extensive industry experience.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-card border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground">Certified Professionals</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-muted-foreground">Level III Consultants</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground">Years Combined Experience</div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                  <p className="text-center text-muted-foreground">
                    Our experts have extensive exposure across oil & gas, marine, energy, 
                    aerospace, and nuclear industries, bringing unmatched expertise to every project.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}