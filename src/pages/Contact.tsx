import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    console.log("Contact form submitted:", formData);
    toast.success("Message sent successfully! We'll be in touch soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-navy-light rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
          </div>
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-radial-pattern opacity-20" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary-foreground"
          >
            Get in <span className="text-gradient-gold">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-primary-foreground"
          >
            Ready to bring inspiring leadership to your event? Let's start a
            conversation.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-lg shadow-elegant"
            >
              <h2 className="text-3xl font-serif font-bold mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => updateFormData("subject", e.target.value)}
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    placeholder="Tell us about your needs..."
                    rows={6}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-gold text-navy font-semibold shadow-gold hover:scale-105 transition-transform"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <Mail className="h-6 w-6 text-gold mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@irisfynn.com"
                        className="text-muted-foreground hover:text-gold transition-colors"
                      >
                        contact@irisfynn.com
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <Phone className="h-6 w-6 text-gold mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+27123456789"
                        className="text-muted-foreground hover:text-gold transition-colors"
                      >
                        +27 (12) 345-6789
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start space-x-4"
                  >
                    <MapPin className="h-6 w-6 text-gold mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Johannesburg, South Africa
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Connect on Social Media
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "https://linkedin.com" },
                    { icon: Twitter, href: "https://twitter.com" },
                    { icon: Instagram, href: "https://instagram.com" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-card rounded-full hover:bg-gold hover:text-navy transition-all shadow-elegant"
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-hero text-primary-foreground p-8 rounded-lg"
              >
                <h3 className="text-2xl font-serif font-bold mb-4">
                  For Bookings
                </h3>
                <p className="mb-4 opacity-90">
                  For speaking engagements, consulting, or media appearances,
                  please use our comprehensive booking form for the fastest
                  response.
                </p>
                <Button
                  asChild
                  className="bg-gradient-gold text-navy font-semibold shadow-gold"
                >
                  <a href="/services#booking">Go to Booking Form</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
