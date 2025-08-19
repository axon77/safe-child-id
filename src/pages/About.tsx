import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Shield, Target, Heart, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Greenbrook Technologies
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Dedicated to protecting what matters most - your children
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Greenbrook Technologies, we believe every child deserves to be safe and secure. 
                  Our mission is to provide parents with comprehensive tools and resources to protect 
                  their children in today's complex world.
                </p>
                <p className="text-lg text-muted-foreground">
                  We understand the fears and concerns parents face daily. That's why we've created 
                  the Child Safety ID Kit - a complete solution that gives parents peace of mind 
                  and children the protection they need.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-warm text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive safety solutions for every family
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-warm text-center">
                  <Target className="h-12 w-12 text-safety mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Purpose</h3>
                  <p className="text-sm text-muted-foreground">
                    Focused on child safety and family security
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-warm text-center">
                  <Heart className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Every solution created with love and understanding
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-warm text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Global</h3>
                  <p className="text-sm text-muted-foreground">
                    Serving families worldwide with local support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Safety ID is Important */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Child Safety ID is Critical
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                In emergency situations, every second counts. Having comprehensive 
                identification information readily available can be the difference 
                between a quick reunion and a prolonged search.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-safe text-center">
                <div className="text-4xl font-bold text-primary mb-4">800K+</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Children Go Missing
                </h3>
                <p className="text-muted-foreground">
                  Every year in the US alone, highlighting the need for preparedness
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-safe text-center">
                <div className="text-4xl font-bold text-safety mb-4">99%</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Are Found Safe
                </h3>
                <p className="text-muted-foreground">
                  When proper identification and information is available quickly
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-safe text-center">
                <div className="text-4xl font-bold text-trust mb-4">72hrs</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Critical Window
                </h3>
                <p className="text-muted-foreground">
                  The first 72 hours are crucial in missing person cases
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  About Greenbrook Technologies
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Greenbrook Technologies LLC is a technology company dedicated to 
                  creating innovative solutions for family safety and security. 
                  With offices in the United States and India, we serve families 
                  globally with localized support and understanding.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our team combines expertise in technology, child development, 
                  and emergency response to create tools that truly make a difference 
                  in family safety.
                </p>
                <p className="text-lg text-muted-foreground">
                  We're committed to continuous innovation and improvement, always 
                  listening to parents' needs and adapting our solutions accordingly.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Commitment
                  </h3>
                  <p className="text-muted-foreground">
                    To provide every family with the tools and knowledge they need 
                    to keep their children safe, secure, and protected.
                  </p>
                </div>
                <div className="border-l-4 border-safety pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Promise
                  </h3>
                  <p className="text-muted-foreground">
                    Continuous innovation in child safety technology, backed by 
                    expert knowledge and compassionate support.
                  </p>
                </div>
                <div className="border-l-4 border-trust pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    A world where every child is protected, every parent is empowered, 
                    and every family feels secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;