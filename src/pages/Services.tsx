import { useState } from "react";
import {
  Mic,
  Users,
  Briefcase,
  Radio,
  MessageSquare,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      icon: Mic,
      title: "Keynote Speaking",
      description:
        "Powerful, inspiring presentations on leadership, transformation, and business excellence tailored to your event.",
      themes: [
        "Leadership in Transformation",
        "Women in Business",
        "Strategic Thinking",
        "Overcoming Adversity",
      ],
    },
    {
      icon: Users,
      title: "Workshop Facilitation",
      description:
        "Interactive workshops that empower teams and drive meaningful organizational change.",
      themes: [
        "Team Transformation",
        "Leadership Development",
        "Strategic Planning",
        "Diversity & Inclusion",
      ],
    },
    {
      icon: MessageSquare,
      title: "MC & Panel Hosting",
      description:
        "Professional, engaging moderation for conferences, panel discussions, and corporate events.",
      themes: [
        "Corporate Events",
        "Industry Conferences",
        "Awards Ceremonies",
        "Panel Discussions",
      ],
    },
    {
      icon: Radio,
      title: "Media Interviews",
      description:
        "Authentic, insightful commentary for TV and radio on business, leadership, and social impact.",
      themes: [
        "Business Commentary",
        "Leadership Insights",
        "Social Issues",
        "Women's Empowerment",
      ],
    },
    {
      icon: Briefcase,
      title: "Consulting Services",
      description:
        "Strategic guidance on CSI, BBBEE, transformation initiatives, and corporate social responsibility.",
      themes: [
        "CSI Strategy",
        "BBBEE Compliance",
        "Transformation Programs",
        "Corporate Governance",
      ],
    },
    {
      icon: Star,
      title: "Custom Engagements",
      description:
        "Bespoke programs designed to meet your specific organizational needs and objectives.",
      themes: [
        "Executive Coaching",
        "Board Advisory",
        "Brand Ambassador",
        "Custom Programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
            <div className="absolute top-20 right-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-navy-light rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 fade-in text-primary-foreground">
            Services & <span className="text-gradient-gold">Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-primary-foreground">
            Bringing transformative insights and inspiring leadership to your
            organization
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background" id="services">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <service.icon className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    Specializations:
                  </h4>
                  <ul className="space-y-1">
                    {service.themes.map((theme, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                        {theme}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground" id="booking">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Book Iris?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Complete our simple booking form to check availability and discuss
              your specific needs. We'll respond within 24 hours.
            </p>
            <Button
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-gold text-navy font-semibold shadow-gold hover:scale-105 transition-transform text-lg px-10 py-6"
            >
              Start Booking Process
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            The Booking Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Request",
                description: "Complete our detailed booking form",
              },
              {
                step: "02",
                title: "Check Availability",
                description: "Review calendar for your preferred dates",
              },
              {
                step: "03",
                title: "Consultation",
                description: "Discuss your specific needs and objectives",
              },
              {
                step: "04",
                title: "Confirmation",
                description: "Finalize details and confirm your booking",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-serif font-bold text-gold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Services;
