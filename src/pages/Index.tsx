import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFamily from "@/assets/hero-family.jpg";
import { 
  Shield, 
  Fingerprint, 
  Heart, 
  Phone, 
  Download, 
  CheckCircle,
  Users,
  Award,
  Clock
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Personal Details & Photos",
      description: "Complete identification profile with current photos and physical characteristics"
    },
    {
      icon: Fingerprint,
      title: "Fingerprints & DNA",
      description: "Secure storage for fingerprints and DNA sample information"
    },
    {
      icon: Heart,
      title: "Medical Information",
      description: "Critical medical data, allergies, medications, and special needs"
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description: "Comprehensive list of emergency contacts and medical professionals"
    }
  ];

  const stats = [
    { number: "800K+", label: "Children go missing annually", icon: Users },
    { number: "99%", label: "Are found safe with proper ID", icon: Award },
    { number: "72hrs", label: "Critical first hours", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-hero-gradient text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Protect What Matters Most
                  <span className="block text-3xl md:text-4xl mt-2 text-white/90">
                    Your Child's Safety
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                  Comprehensive Child Safety ID Kit to keep your children safe and secure. 
                  Be prepared for any emergency with complete identification profiles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="safety" size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Download className="h-5 w-5 mr-2" />
                    Get Your Safety ID Kit
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    Download Now
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={heroFamily}
                  alt="Happy family with children - representing safety and protection"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-safety text-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">FREE</div>
                  <div className="text-sm">Safety Kit</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Complete Child Safety Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive safety kit includes everything you need to protect 
                your children and be prepared for any emergency situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Child Safety ID Matters
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Being prepared can make all the difference in emergency situations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-card p-8 rounded-lg shadow-safe">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Comprehensive Child Safety Protection
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Child Safety ID Kit by Greenbrook Technologies provides parents 
                  with a complete identification system for their children. In emergency 
                  situations, having detailed information readily available can be the 
                  difference between a quick reunion and a prolonged search.
                </p>
                <div className="space-y-4">
                  {[
                    "Professional-grade identification templates",
                    "Law enforcement approved formats",
                    "Complete medical and emergency information",
                    "Easy-to-use and regularly updatable",
                    "Secure storage guidelines included"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-safety mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-safe border-l-4 border-primary">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    🎯 Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To provide every family with the tools and knowledge they need 
                    to keep their children safe, secure, and protected in today's world.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-safe border-l-4 border-safety">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    🛡️ Your Peace of Mind
                  </h3>
                  <p className="text-muted-foreground">
                    Know that you're prepared for any situation with comprehensive 
                    identification information that meets professional standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-trust-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download your free Child Safety ID Kit today and take the first step 
              towards comprehensive family protection. No registration required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="safety" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Download className="h-5 w-5 mr-2" />
                Download Free Kit
              </Button>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
