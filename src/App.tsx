import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DigitalTwins from "./pages/DigitalTwins";
import Erp from "./pages/Erp";
import NDTConnect from "./pages/NDTConnect";
import BlogPage from "./pages/Blog";
import UltrasonicTesting from "./pages/ultrasonic-testing";
import MagneticParticleTesting from "./pages/magnetic-particle-testing";
import VisualTesting from "./pages/visual-testing";
import RadiographicTesting from "./pages/radiographic-testing";
import EddyCurrentTesting from "./pages/eddy-current-testing";
import PenetrantTesting from "./pages/penetrant-testing";
import ConsultingServices from "./pages/ConsultingServices";
import IndustrialAnimation from "./components/IndustrialAnimation";
import { lazy } from "react";

const DigitalTwinsNDT = lazy(() => import("./pages/digital-twins-ndt"));
const queryClient = new QueryClient();

const App = () => (
   <QueryClientProvider client={queryClient}>
      <TooltipProvider>
         <Toaster />
         <Sonner />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Index />} />
               <Route path="/about" element={<About />} />
               {/* <Route path="/services" element={<Services />} /> */}
               <Route path="/industry" element={<IndustrialAnimation />} />
               <Route path="/training" element={<Training />} />
               <Route path="/consulting" element={<Services />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/blog" element={<BlogPage />} />
               <Route
                  path="/blog/ultrasonic-testing"
                  element={<UltrasonicTesting />}
               />
               <Route
                  path="/blog/magnetic-particle-testing"
                  element={<MagneticParticleTesting />}
               />
               <Route path="/blog/visual-testing" element={<VisualTesting />} />
               <Route
                  path="/blog/radiographic-testing"
                  element={<RadiographicTesting />}
               />
               <Route
                  path="/blog/eddy-current-testing"
                  element={<EddyCurrentTesting />}
               />
               <Route
                  path="/blog/penetrant-testing"
                  element={<PenetrantTesting />}
               />
               <Route
                  path="/digital-twins"
                  element={<DigitalTwins />}
               />
               <Route path="/erp" element={<Erp />} />
               <Route path="/ndt-connect" element={<NDTConnect />} />
               <Route
                  path="/consulting-service"
                  element={<ConsultingServices />}
               />
               <Route path="/404" element={<NotFound />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </TooltipProvider>
   </QueryClientProvider>
);

export default App;
