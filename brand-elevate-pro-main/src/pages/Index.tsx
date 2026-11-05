import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ConsultationForm from "@/components/ConsultationForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <FAQ />
      <ConsultationForm />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
