import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Briefcase, Tv } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.7), rgba(10, 22, 40, 0.8)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 fade-in">
            Transforming Vision
            <br />
            <span className="text-gradient-gold">Into Action</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto slide-up opacity-90">
            Businesswoman. Inspiration. TV Personality. Transformation Leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
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
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-navy text-lg px-8 py-6"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Four Pillars of Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <pillar.icon className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
            Trusted by Leading Organizations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Event?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bring inspiring leadership and transformative insights to your next
            corporate event, conference, or media appearance.
          </p>
          <Button
            size="lg"
            onClick={() => setIsBookingOpen(true)}
            className="bg-gradient-gold text-navy font-semibold shadow-gold hover:scale-105 transition-transform text-lg px-10 py-6"
          >
            Book Iris Today
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Index;
