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
               <Route path="/services" element={<Services />} />
               <Route path="/training" element={<Training />} />
               <Route path="/consulting" element={<Services />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/blog" element={<BlogPage />} />
               <Route path="/digital-twins" element={<DigitalTwins/>} />
               <Route path="/erp" element={<Erp />} />
               <Route path="/ndt-connect" element={<NDTConnect />} />
               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </TooltipProvider>
   </QueryClientProvider>
);

export default App;
