import { Award, BookOpen, Heart, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "The Apprentice SA",
      description:
        "Showcased strategic thinking under Tokyo Sexwale's mentorship",
    },
    {
      icon: TrendingUp,
      title: "Corporate Excellence",
      description: "Led transformation at McCarthy, KZN Tourism & SABC Foundation",
    },
    {
      icon: Heart,
      title: "CSI Leadership",
      description: "Board service with SEDA and Ethekwini Foundation",
    },
    {
      icon: BookOpen,
      title: "Author",
      description: 'Published "Burning Bright" - A journey of transformation',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-navy-light rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 fade-in text-primary-foreground">
            Born to <span className="text-gradient-gold">Be of Service</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-90 text-primary-foreground">
            From humble roots to corporate boardrooms and television screens -
            a journey of transformation, leadership, and unwavering commitment to
            empowerment.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-serif font-bold mb-6">
                A Legacy of Resilience
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Iris Fynn's journey is one of remarkable transformation. Descended
                  from Robben Island lineage, she carries forward a legacy of
                  resilience and strength that continues to inspire her work today.
                </p>
                <p>
                  Her breakthrough moment came with <strong>The Apprentice SA</strong>,
                  where she demonstrated exceptional strategic thinking under the
                  mentorship of Tokyo Sexwale, who recognized her as someone "born
                  to be of service."
                </p>
                <p>
                  This philosophy has guided her through an impressive corporate
                  career, including leadership roles at <strong>McCarthy</strong>,{" "}
                  <strong>KZN Tourism Authority</strong>, and the{" "}
                  <strong>SABC Foundation</strong>, where she championed
                  transformation and excellence.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={aboutImage}
                alt="Iris Fynn"
                className="rounded-lg shadow-elegant hover:shadow-gold transition-shadow"
              />
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <achievement.icon className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Service Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">
              Commitment to Transformation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Beyond corporate leadership, Iris serves on influential boards
              including <strong>SEDA (Small Enterprise Development Agency)</strong>{" "}
              and the <strong>Ethekwini Foundation</strong>, where she continues
              to drive meaningful change in CSI, BBBEE, and transformation
              initiatives.
            </p>
            <p className="text-lg text-muted-foreground">
              Her work extends to media, where she brings authenticity and insight
              as a sought-after TV and radio personality, contributing to
              discussions on business, leadership, and women's empowerment across
              South Africa's leading platforms including <strong>SABC</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Brands Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-12">
            Partnerships with Excellence
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Throughout her career, Iris has collaborated with and led initiatives
            for some of South Africa's most respected organizations:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["SAA", "MTN", "Coca-Cola", "SABC", "Unilever", "McCarthy"].map(
              (brand, index) => (
                <div
                  key={index}
                  className="text-3xl font-bold text-primary opacity-60 hover:opacity-100 hover:text-gold transition-all"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
