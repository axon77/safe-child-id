import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Fingerprint, 
  Heart, 
  Phone, 
  Shield, 
  Camera,
  FileText,
  AlertTriangle,
  Clock,
  MapPin,
  Activity,
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: User,
      title: "Personal Details & Photos",
      description: "Complete identification profile including current photos, physical characteristics, and personal information",
      highlights: ["Current and backup photos", "Physical description", "Personal details", "Identifying marks"]
    },
    {
      icon: Fingerprint,
      title: "Fingerprints & DNA Storage",
      description: "Secure storage of fingerprints and DNA sample information for positive identification",
      highlights: ["All 10 fingerprints", "DNA sample guidance", "Secure storage tips", "Professional quality"]
    },
    {
      icon: Heart,
      title: "Medical Information",
      description: "Critical medical data including allergies, medications, and special medical needs",
      highlights: ["Medical conditions", "Current medications", "Allergies & reactions", "Special needs info"]
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description: "Comprehensive list of emergency contacts including family, friends, and medical professionals",
      highlights: ["Primary contacts", "Secondary contacts", "Medical professionals", "School contacts"]
    },
    {
      icon: FileText,
      title: "Dental Records",
      description: "Dental chart and dental care information for additional identification purposes",
      highlights: ["Dental chart template", "Dental work history", "Dentist information", "Orthodontic details"]
    },
    {
      icon: Shield,
      title: "Safety Education",
      description: "Age-appropriate safety tips and emergency procedures for children",
      highlights: ["Home safety rules", "Stranger danger education", "Emergency procedures", "Online safety tips"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-safety-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive Safety Features
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Everything you need to keep your children safe and secure
              </p>
            </div>
          </div>
        </section>

        {/* Main Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-card p-8 rounded-lg shadow-safe hover:shadow-warm transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-safety rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Our Safety Kit Stands Out
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Designed by experts with input from law enforcement, medical professionals, and child safety specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Quick Access</h3>
                <p className="text-muted-foreground text-sm">
                  Organized for immediate access during emergencies
                </p>
              </div>
              <div className="text-center">
                <MapPin className="h-16 w-16 text-safety mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Portable</h3>
                <p className="text-muted-foreground text-sm">
                  Compact design for easy storage and transport
                </p>
              </div>
              <div className="text-center">
                <Activity className="h-16 w-16 text-trust mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional</h3>
                <p className="text-muted-foreground text-sm">
                  Meets law enforcement and medical standards
                </p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Family-Focused</h3>
                <p className="text-muted-foreground text-sm">
                  Designed with families' real needs in mind
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card p-8 rounded-lg shadow-safe border-l-4 border-primary">
              <div className="flex items-start">
                <AlertTriangle className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Important Safety Notes
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      • Store completed safety kits in a secure, easily accessible location
                    </p>
                    <p>
                      • Update information regularly as children grow and change
                    </p>
                    <p>
                      • Share copies with trusted family members and caregivers
                    </p>
                    <p>
                      • The Child Safety ID Kit is a preparedness tool - always contact local authorities in emergencies
                    </p>
                    <p>
                      • Keep digital and physical copies for backup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download your free Child Safety ID Kit today and take the first step 
              towards comprehensive family protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="safety" size="lg" className="bg-white text-primary hover:bg-white/90">
                Download Free Kit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn How It Works
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;