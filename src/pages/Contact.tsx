import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEOHead } from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Navigation } from "@/components/Navigation";
import { Users, CheckCircle2, Cpu, Award } from "lucide-react";

export default function Contact() {
   const contactInfo = [
      {
         icon: Phone,
         title: "Phone",
         details: "+1 (555) 123-4567",
         subtitle: "Mon-Fri, 8AM - 6PM",
      },
      {
         icon: Mail,
         title: "Email",
         details: "info@atlantisndt.com",
         subtitle: "24/7 Support",
      },
      {
         icon: MapPin,
         title: "Location",
         details: "North America",
         subtitle: "Multiple Locations",
      },
      {
         icon: Clock,
         title: "Response Time",
         details: "< 24 Hours",
         subtitle: "Emergency Available",
      },
   ];

   const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Atlantis NDT",
      description:
         "Professional Non-Destructive Testing services, training, and consultancy",
      url: "https://atlantisndt.com",
      contactPoint: {
         "@type": "ContactPoint",
         telephone: "+1-555-123-4567",
         contactType: "Customer Service",
         email: "info@atlantisndt.com",
      },
      serviceArea: "North America",
      hasOfferCatalog: {
         "@type": "OfferCatalog",
         name: "NDT Services",
         itemListElement: [
            {
               "@type": "Offer",
               itemOffered: {
                  "@type": "Service",
                  name: "Ultrasonic Testing",
                  description:
                     "Detect internal flaws using high-frequency sound waves",
               },
            },
            {
               "@type": "Offer",
               itemOffered: {
                  "@type": "Service",
                  name: "Radiographic Testing",
                  description:
                     "X-ray & gamma ray inspection for internal structures",
               },
            },
         ],
      },
   };

   return (
      <div className="min-h-screen pt-20 bg-background">
         <Navigation />
         <SEOHead
            title="Contact Us"
            description="Contact Atlantis NDT for professional Non-Destructive Testing services. Expert team providing 24/7 support across North America."
            keywords="contact NDT services, Atlantis NDT contact, NDT inspection quote, professional NDT consulting"
            structuredData={structuredData}
         />

         {/* Hero Section */}
         <motion.section
            className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <div className="container mx-auto px-6 text-center max-w-4xl">
               <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  Contact <span className="gradient-text">Us</span>
               </motion.h1>
               <motion.p
                  className="text-xl text-muted-foreground leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
               >
                  Our expert team is ready to provide customized solutions for
                  your inspection, training, and consultancy needs.
               </motion.p>
            </div>
         </motion.section>

         {/* Contact Info Cards */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                  {contactInfo.map((info, index) => (
                     <ScrollReveal
                        key={index}
                        animation="fade-up"
                        delay={index * 0.1}
                     >
                        <Card className="text-center border-0 shadow-lg hover:scale-105 transition-transform">
                           <CardContent className="p-6">
                              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                 <info.icon className="w-8 h-8 text-primary-foreground" />
                              </div>
                              <h3 className="text-lg font-bold mb-1">
                                 {info.title}
                              </h3>
                              <p className="text-primary font-semibold">
                                 {info.details}
                              </p>
                              <p className="text-muted-foreground text-sm">
                                 {info.subtitle}
                              </p>
                           </CardContent>
                        </Card>
                     </ScrollReveal>
                  ))}
               </div>
            </div>
         </section>

         {/* Contact Form & Company Info */}
         <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <motion.div
                     initial={{ x: -50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                  >
                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <CardTitle className="text-2xl">
                              Get in Touch
                           </CardTitle>
                           <p className="text-muted-foreground">
                              Fill out the form and we'll respond within 24
                              hours.
                           </p>
                        </CardHeader>
                        <CardContent>
                           <form className="space-y-6">
                              <div className="grid md:grid-cols-2 gap-4">
                                 <div>
                                    <Label htmlFor="firstName">
                                       First Name *
                                    </Label>
                                    <Input
                                       id="firstName"
                                       placeholder="John"
                                       required
                                    />
                                 </div>
                                 <div>
                                    <Label htmlFor="lastName">
                                       Last Name *
                                    </Label>
                                    <Input
                                       id="lastName"
                                       placeholder="Doe"
                                       required
                                    />
                                 </div>
                              </div>
                              <div>
                                 <Label htmlFor="email">Email *</Label>
                                 <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    required
                                 />
                              </div>
                              <div>
                                 <Label htmlFor="phone">Phone</Label>
                                 <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+1 (555) 123-4567"
                                 />
                              </div>
                              <div>
                                 <Label htmlFor="company">Company</Label>
                                 <Input
                                    id="company"
                                    placeholder="Your Company Name"
                                 />
                              </div>
                              <div>
                                 <Label htmlFor="service">
                                    Service Interest
                                 </Label>
                                 <select
                                    id="service"
                                    className="w-full p-3 border border-input rounded-md bg-background"
                                 >
                                    <option value="">Select a service</option>
                                    <option value="inspection">
                                       Inspection Services
                                    </option>
                                    <option value="training">
                                       Training Programs
                                    </option>
                                    <option value="consulting">
                                       Consulting
                                    </option>
                                    <option value="digital-twins">
                                       Digital Twins
                                    </option>
                                 </select>
                              </div>
                              <div>
                                 <Label htmlFor="message">Message *</Label>
                                 <Textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    required
                                 />
                              </div>
                              <Button className="btn-primary w-full group">
                                 Send Message{" "}
                                 <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                           </form>
                        </CardContent>
                     </Card>
                  </motion.div>

                  {/* Company Info */}
                  <motion.div
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="space-y-6"
                  >
                     
                     <Card className="border-0 shadow-lg p-6">
                        <CardHeader>
                           <CardTitle className="text-2xl">
                              Why Choose Atlantis NDT?
                           </CardTitle>
                           <p className="text-muted-foreground mt-2">
                              Discover what sets us apart in Non-Destructive
                              Testing services.
                           </p>
                        </CardHeader>
                        <CardContent className="mt-6 grid gap-6">
                           {[
                              {
                                 icon: Users,
                                 title: "Expert Team",
                                 description:
                                    "50+ certified professionals with Level III qualifications across multiple industries.",
                              },
                              {
                                 icon: CheckCircle2,
                                 title: "Proven Track Record",
                                 description:
                                    "1000+ inspections successfully completed with high client satisfaction.",
                              },
                              {
                                 icon: Cpu,
                                 title: "Advanced Technology",
                                 description:
                                    "VR/AR training and digital twin solutions for cutting-edge NDT services.",
                              },
                              {
                                 icon: Award,
                                 title: "Industry Recognition",
                                 description:
                                    "Trusted by top companies in oil & gas, aerospace, marine, and nuclear sectors.",
                              },
                           ].map((item, index) => (
                              <motion.div
                                 key={index}
                                 className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all cursor-pointer"
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true }}
                                 transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                 }}
                              >
                                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary/20 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-primary" />
                                 </div>
                                 <div>
                                    <h4 className="font-semibold text-lg">
                                       {item.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                       {item.description}
                                    </p>
                                 </div>
                              </motion.div>
                           ))}
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Emergency Section */}
         <section className="py-20 bg-gray-100 text-primary">
            <div className="container mx-auto px-6 text-center">
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Emergency Inspection Services
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 text-black">
                     Critical equipment failure? We provide 24/7 emergency
                     inspection services to get your operations back online
                     safely.
                  </p>
                  <Button
                     size="lg"
                     variant="outline"
                     className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                  >
                     Emergency Hotline: +1 (555) 911-NDT
                  </Button>
               </motion.div>
            </div>
         </section>
      </div>
   );
}
