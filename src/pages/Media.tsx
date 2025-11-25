import { Play, Mic, BookOpen, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import mediaBackground from "@/assets/media-background.jpg";

const Media = () => {
  const videoHighlights = [
    {
      title: "The Apprentice SA - Strategic Leadership",
      description: "Highlights from the show that launched a media career",
      type: "TV Appearance",
    },
    {
      title: "Corporate Transformation Keynote",
      description: "Inspiring talk on leading organizational change",
      type: "Speaking Event",
    },
    {
      title: "Women in Leadership Panel",
      description: "Discussion on breaking barriers in business",
      type: "Panel Discussion",
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 fade-in text-primary-foreground">
            Media <span className="text-gradient-gold">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground opacity-90">
            Television appearances, radio interviews, publications, and more
          </p>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Play className="h-8 w-8 text-gold mr-3" />
            <h2 className="text-4xl font-serif font-bold">Video Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoHighlights.map((video, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video bg-gradient-hero flex items-center justify-center">
                  <Play className="h-16 w-16 text-primary-foreground opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {video.type}
                  </span>
                  <h3 className="text-xl font-serif font-semibold mt-2 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Video integration will be fully functional once Lovable Cloud is
              connected
            </p>
          </div>
        </div>
      </section>

      {/* Radio Appearances */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Mic className="h-8 w-8 text-gold mr-3" />
            <h2 className="text-4xl font-serif font-bold">Radio Appearances</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {radioAppearances.map((appearance, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-elegant hover:shadow-gold transition-all duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <BookOpen className="h-8 w-8 text-gold mr-3" />
            <h2 className="text-4xl font-serif font-bold">
              Publications & Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                  {publication.type}
                </span>
                <h3 className="text-2xl font-serif font-semibold mt-4 mb-3">
                  {publication.title}
                </h3>
                <p className="text-muted-foreground">{publication.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Need Media Materials?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Download high-resolution photos, biography, and press kit for your
            event or publication.
          </p>
          <button className="bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform">
            Download Press Kit
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
