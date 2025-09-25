import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Users, Clock, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Training() {
  const courses = [
    {
      level: "Level I",
      title: "Foundation Certification",
      duration: "40 hours",
      methods: ["UT", "MT", "PT", "VT"],
      description: "Basic principles and hands-on practice for entry-level technicians.",
      features: ["Theoretical foundations", "Hands-on training", "Safety protocols", "Basic equipment operation"]
    },
    {
      level: "Level II",
      title: "Advanced Technician",
      duration: "80 hours",
      methods: ["UT", "MT", "PT", "VT", "RT", "ET"],
      description: "Advanced techniques and interpretation for experienced professionals.",
      features: ["Advanced interpretation", "Procedure writing", "Equipment calibration", "Quality control"]
    },
    {
      level: "Level III",
      title: "Expert Consultant",
      duration: "120 hours",
      methods: ["All Methods"],
      description: "Comprehensive training for senior professionals and consultants.",
      features: ["Procedure development", "Training delivery", "Technical leadership", "Code compliance"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Industry Recognized",
      description: "Certifications recognized across oil & gas, aerospace, marine, and nuclear industries."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from Level III certified professionals with decades of field experience."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Updated course materials covering latest standards and technological advances."
    },
    {
      icon: Trophy,
      title: "High Success Rate",
      description: "95% pass rate with personalized attention and practical learning approach."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Atlantis NDT Training",
    "description": "Professional NDT training and certification programs",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "NDT Training Programs",
      "itemListElement": courses.map((course, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Course",
          "name": course.title,
          "description": course.description,
          "timeRequired": course.duration,
          "courseMode": "blended"
        }
      }))
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Training Programs"
        description="Professional NDT training and certification programs. Level I, II, III courses in ultrasonic, radiographic, magnetic particle, penetrant, eddy current, and visual testing. VR/AR enhanced learning."
        keywords="NDT training, NDT certification, ultrasonic training, radiographic training, Level I II III certification, VR AR training, hands-on NDT courses"
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
              NDT <span className="gradient-text">Training</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional NDT training programs designed to advance your career with 
              industry-recognized certifications and hands-on experience.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Training Levels */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Certification Levels</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured training programs from foundation to expert level, following international standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.level}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover-scale border-0 shadow-md group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary text-primary-foreground">{course.level}</Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                    <p className="text-muted-foreground">{course.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Methods Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.methods.map((method) => (
                          <Badge key={method} variant="outline" className="text-xs">
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="btn-primary w-full group-hover:shadow-lg transition-all duration-300">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Training</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading training programs with proven results and comprehensive support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-0 shadow-md hover-scale">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VR/AR Training Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">VR/AR</span> Enhanced Training
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the future of NDT training with our immersive Virtual and 
                Augmented Reality programs. Practice complex procedures in a safe, 
                controlled environment before working on actual equipment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>Immersive learning experiences</span>
                </li>
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>Risk-free practice environment</span>
                </li>
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>Real-time feedback and assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>Accelerated learning curve</span>
                </li>
              </ul>
              <Button className="btn-primary">Explore VR Training</Button>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-card border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">95%</div>
                      <div className="text-muted-foreground">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-muted-foreground">Students Trained</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">10+</div>
                      <div className="text-muted-foreground">NDT Methods</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">7+</div>
                      <div className="text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                    <p className="text-center text-muted-foreground">
                      Join hundreds of professionals who have advanced their careers through our comprehensive training programs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advance Your NDT Career
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our next training cohort and take your professional skills to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Schedule
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}