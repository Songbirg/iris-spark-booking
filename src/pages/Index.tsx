import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Briefcase, Tv } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import heroImage from "@/assets/hero-background.png";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const pillars = [
    {
      icon: Briefcase,
      title: "Business Leadership",
      description: "Strategic corporate guidance and transformation expertise",
    },
    {
      icon: Sparkles,
      title: "Inspiration & Motivation",
      description: "Empowering audiences to achieve their highest potential",
    },
    {
      icon: Tv,
      title: "TV & Radio Personality",
      description: "Engaging media presence and professional broadcasting",
    },
    {
      icon: Users,
      title: "Women's Empowerment",
      description: "Championing diversity, inclusion, and female leadership",
    },
  ];

  const brands = [
    "SAA",
    "MTN",
    "Coca-Cola",
    "SABC",
    "Unilever",
    "McCarthy",
    "KZN Tourism",
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y,
            backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.75), rgba(10, 22, 40, 0.85)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div 
          style={{ opacity }}
          className="container mx-auto px-4 z-10 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg"
          >
            Transforming Vision
            <br />
            <span className="text-gradient-gold drop-shadow-md">Into Action</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white drop-shadow-md"
          >
            Businesswoman. Inspiration. TV Personality. Transformation Leader.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-gold text-navy font-semibold shadow-gold hover:scale-105 transition-transform text-lg px-8 py-6"
            >
              Book Iris Fynn
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white bg-white text-navy hover:bg-white/90 hover:border-white/90 text-lg px-8 py-6"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
          >
            Four Pillars of Excellence
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <pillar.icon className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-12"
          >
            Trusted by Leading Organizations
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-2xl font-bold transition-opacity"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Ready to Transform Your Event?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Bring inspiring leadership and transformative insights to your next
            corporate event, conference, or media appearance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-gold text-navy font-semibold shadow-gold hover:scale-105 transition-transform text-lg px-10 py-6"
            >
              Book Iris Today
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Index;
