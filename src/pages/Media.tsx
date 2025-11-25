import { Play, Mic, BookOpen, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import mediaBackground from "@/assets/media-background.jpg";
import { motion } from "framer-motion";

const Media = () => {
  const videoHighlights = [
    {
      title: "The Apprentice SA - Strategic Leadership",
      description: "Highlights from the show that launched a media career",
      type: "TV APPEARANCE",
      videoId: "RH8i6tJjzeE",
    },
    {
      title: "Corporate Transformation Keynote",
      description: "Inspiring talk on leading organizational change",
      type: "SPEAKING EVENT",
      videoId: "9PQggTfnykE",
    },
    {
      title: "Women in Leadership Panel",
      description: "Discussion on breaking barriers in business",
      type: "PANEL DISCUSSION",
      videoId: "9dT94rSzWqY",
    },
  ];

  const radioAppearances = [
    {
      station: "SABC Radio",
      topic: "Business Excellence and Transformation",
      date: "2024",
    },
    {
      station: "Metro FM",
      topic: "Women's Empowerment in Corporate SA",
      date: "2024",
    },
    {
      station: "Talk Radio 702",
      topic: "CSI and Corporate Social Responsibility",
      date: "2023",
    },
  ];

  const publications = [
    {
      title: '"Burning Bright"',
      type: "Book",
      description: "A journey of transformation and leadership",
    },
    {
      title: "Business Leaders Magazine",
      type: "Feature Article",
      description: "Profile on transformation leadership",
    },
    {
      title: "Women in Business Quarterly",
      type: "Cover Story",
      description: "Breaking barriers in corporate South Africa",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url(${mediaBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-90">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-1000" />
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-navy-light rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-3000" />
          </div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary-foreground"
          >
            Media <span className="text-gradient-gold">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl text-primary-foreground opacity-90"
          >
            Television appearances, radio interviews, publications, and more
          </motion.p>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-12"
          >
            <Play className="h-8 w-8 text-gold mr-3" />
            <h2 className="text-4xl font-serif font-bold">Video Highlights</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoHighlights.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-shadow duration-300"
              >
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Radio Appearances */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-12"
          >
            <Mic className="h-8 w-8 text-gold mr-3" />
            <h2 className="text-4xl font-serif font-bold">Radio Appearances</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {radioAppearances.map((appearance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-background p-6 rounded-lg shadow-elegant hover:shadow-gold transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Star className="h-6 w-6 text-gold" />
                  <span className="text-sm text-muted-foreground">
                    {appearance.date}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {appearance.station}
                </h3>
                <p className="text-muted-foreground">{appearance.topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-12"
          >
            <BookOpen className="h-8 w-8 text-gold mr-3" />
            <h2 className="text-4xl font-serif font-bold">
              Publications & Features
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-card p-8 rounded-lg shadow-elegant hover:shadow-gold transition-shadow duration-300"
              >
                <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                  {publication.type}
                </span>
                <h3 className="text-2xl font-serif font-semibold mt-4 mb-3">
                  {publication.title}
                </h3>
                <p className="text-muted-foreground">{publication.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold mb-6"
          >
            Need Media Materials?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Download high-resolution photos, biography, and press kit for your
            event or publication.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-lg shadow-gold transition-transform"
          >
            Download Press Kit
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
