import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Download, Edit, FileCheck, Shield, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Download Your Kit",
      description: "Get your free Child Safety ID Kit template instantly",
      details: [
        "Instant PDF download",
        "Printable format",
        "Professional template",
        "No registration required"
      ]
    },
    {
      icon: Edit,
      title: "Fill Out Information",
      description: "Complete all sections with your child's current information",
      details: [
        "Personal details & photos",
        "Fingerprints & physical traits",
        "Medical information",
        "Emergency contacts"
      ]
    },
    {
      icon: FileCheck,
      title: "Store Securely",
      description: "Keep copies in safe, accessible locations",
      details: [
        "Physical copy at home",
        "Digital backup in cloud",
        "Copy with trusted relative",
        "Share with school if needed"
      ]
    },
    {
      icon: Shield,
      title: "Emergency Ready",
      description: "Have vital information ready when every second counts",
      details: [
        "Quick access to ID info",
        "Law enforcement ready",
        "Medical emergency prepared",
        "Peace of mind achieved"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-trust-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How It Works
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Simple, secure, and effective child safety preparation
              </p>
            </div>
          </div>
        </section>

        {/* Steps Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                4 Simple Steps to Safety
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Protecting your child has never been easier or more comprehensive
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-card p-8 rounded-lg shadow-safe text-center hover:shadow-warm transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2 text-left">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-safety rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Guide */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Detailed Instructions
                </h2>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Filling Out Personal Details
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Include current, clear photos and complete physical description. 
                      Update this information every 6 months or whenever there are 
                      significant changes in appearance.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use recent, high-quality photos</li>
                      <li>• Include both head & shoulder and full body shots</li>
                      <li>• Note any distinguishing marks or features</li>
                      <li>• Record height, weight, and other measurements</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-safety pl-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Recording Fingerprints
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Use the provided fingerprint cards to record all 10 fingerprints. 
                      This is one of the most reliable forms of identification.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use ink pad or digital scanner if available</li>
                      <li>• Roll each finger from nail to nail</li>
                      <li>• Ensure clear, complete impressions</li>
                      <li>• Label each print clearly</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-trust pl-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Medical Information
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Document all relevant medical information that could be 
                      critical during an emergency situation.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• List all current medications and dosages</li>
                      <li>• Note allergies and adverse reactions</li>
                      <li>• Include chronic conditions or special needs</li>
                      <li>• Add doctor and pharmacy contact information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Best Practices & Tips
                </h2>
                
                <div className="bg-card p-8 rounded-lg shadow-safe">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Storage & Security
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          Physical Storage
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Keep the original in a fireproof safe or security box. 
                          Store copies in multiple secure locations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-safety mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          Digital Backup
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Scan completed forms and store encrypted copies in 
                          secure cloud storage with limited access.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-trust mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          Access & Updates
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Ensure trusted family members know where to find the 
                          kit. Review and update information every 6 months.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    🚨 Emergency Use
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    In case of emergency, immediately contact local law enforcement 
                    (911) and provide them with the Child Safety ID Kit information.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    The comprehensive information in your kit will help authorities 
                    respond quickly and effectively to locate your child.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-safety-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Protecting Your Family Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait for an emergency. Download your Child Safety ID Kit 
              now and have peace of mind knowing you're prepared.
            </p>
            <Button variant="safety" size="lg" className="bg-white text-primary hover:bg-white/90">
              Download Your Free Kit Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;