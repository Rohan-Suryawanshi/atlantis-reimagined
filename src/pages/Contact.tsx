import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Monday to Friday, 8AM - 6PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@atlantisndt.com",
      subtitle: "24/7 Support Available"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "North America",
      subtitle: "Multiple Service Locations"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 Hours",
      subtitle: "Emergency Services Available"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
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
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your NDT requirements? Our expert team is here to provide 
              customized solutions for your inspection, training, and consultancy needs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center border-0 shadow-md hover-scale">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    <p className="text-primary font-semibold mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
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
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select 
                        id="service" 
                        className="w-full p-3 border border-input rounded-md bg-background"
                      >
                        <option value="">Select a service</option>
                        <option value="inspection">Inspection Services</option>
                        <option value="training">Training Programs</option>
                        <option value="consulting">Consulting</option>
                        <option value="digital-twins">Digital Twins</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                        required 
                      />
                    </div>
                    
                    <Button className="btn-primary w-full group">
                      Send Message
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
              className="space-y-8"
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Why Choose Atlantis NDT?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Expert Team</h4>
                        <p className="text-muted-foreground text-sm">50+ certified professionals with Level III qualifications</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Proven Track Record</h4>
                        <p className="text-muted-foreground text-sm">1000+ successful inspections across multiple industries</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Advanced Technology</h4>
                        <p className="text-muted-foreground text-sm">VR/AR training and digital twin solutions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Industry Recognition</h4>
                        <p className="text-muted-foreground text-sm">Trusted by leading companies in oil & gas, aerospace, marine, and nuclear</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We provide comprehensive NDT services across North America with rapid response capabilities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Industries</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Oil & Gas</li>
                        <li>Marine</li>
                        <li>Aerospace</li>
                        <li>Nuclear</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Services</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Inspection</li>
                        <li>Training</li>
                        <li>Consulting</li>
                        <li>Digital Twins</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-primary text-primary-foreground">
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
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Critical equipment failure? We provide 24/7 emergency inspection services 
              to get your operations back online quickly and safely.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Emergency Hotline: +1 (555) 911-NDT
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}