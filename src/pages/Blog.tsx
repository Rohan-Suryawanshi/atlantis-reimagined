import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

export default function BlogPage() {
   const blogs = [
      {
         title: "Understanding Ultrasonic Testing in NDT",
         date: "October 1, 2025",
         snippet:
            "Explore how ultrasonic testing helps detect internal flaws in materials without causing damage.",
         link: "/blog/ultrasonic-testing",
      },
      {
         title: "Magnetic Particle Testing: Best Practices",
         date: "October 3, 2025",
         snippet:
            "Learn how magnetic particle testing detects surface and near-surface defects efficiently.",
         link: "/blog/magnetic-particle-testing",
      },
      {
         title: "Visual Testing Techniques for Modern NDT",
         date: "October 5, 2025",
         snippet:
            "A guide to direct and remote visual inspection methods for industrial assets.",
         link: "/blog/visual-testing",
      },
      {
         title: "Radiographic Testing in Industrial Applications",
         date: "October 7, 2025",
         snippet:
            "Understand X-ray and gamma ray techniques for internal flaw detection and weld inspections.",
         link: "/blog/radiographic-testing",
      },
      {
         title: "Eddy Current Testing Explained",
         date: "October 10, 2025",
         snippet:
            "An introduction to eddy current testing and its applications in quality control.",
         link: "/blog/eddy-current-testing",
      },
      {
         title: "Penetrant Testing: Detecting Surface Defects",
         date: "October 12, 2025",
         snippet:
            "A deep dive into liquid penetrant testing and its role in non-destructive inspections.",
         link: "/blog/penetrant-testing",
      },
      {
         title: "Digital Twins in NDT: Transforming Asset Management",
         date: "October 15, 2025",
         snippet:
            "Explore how digital twins and VR/AR technology improve NDT processes and training.",
         link: "/blog/digital-twins-ndt",
      },
   ];

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <SEOHead
            title="NDT Connect Blog"
            description="Read the latest insights, guides, and tutorials on Non-Destructive Testing techniques, technologies, and industry trends."
            keywords="NDT Connect blog, ultrasonic testing, radiographic testing, magnetic particle testing, visual testing, eddy current, penetrant testing, digital twins"
         />

         {/* Hero Section */}
         <motion.section
            className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <div className="container mx-auto px-6">
               <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  NDT Connect <span className="gradient-text">Blog</span>
               </motion.h1>
               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Stay updated with the latest insights, techniques, and
                  industry trends in Non-Destructive Testing.
               </p>
            </div>
         </motion.section>

         {/* Blogs Grid */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogs.map((blog, index) => (
                     <motion.div
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                     >
                        <Card className="h-full hover-scale border-0 shadow-md group">
                           <CardHeader>
                              <CardTitle className="text-xl">
                                 {blog.title}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                 {blog.date}
                              </p>
                           </CardHeader>
                           <CardContent>
                              <p className="text-muted-foreground mb-4">
                                 {blog.snippet}
                              </p>
                              <Link
                                 to={blog.link}
                                 className="text-primary font-semibold hover:underline"
                              >
                                 Read More →
                              </Link>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}
