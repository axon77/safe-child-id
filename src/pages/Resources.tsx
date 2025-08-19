import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Download, 
  FileText, 
  HelpCircle, 
  Phone, 
  Mail,
  ExternalLink,
  CheckCircle,
  Shield
} from "lucide-react";

const Resources = () => {
  const faqs = [
    {
      question: "How often should I update my child's Safety ID Kit?",
      answer: "Update your child's Safety ID Kit every 6 months or whenever there are significant changes in appearance, medical conditions, or contact information. Children grow and change quickly, so regular updates ensure the information remains current and useful."
    },
    {
      question: "Where should I store the completed Safety ID Kit?",
      answer: "Store the original in a fireproof safe or security box at home. Keep digital copies in secure cloud storage, and provide physical copies to trusted family members, babysitters, and your child's school if appropriate."
    },
    {
      question: "Is the Safety ID Kit accepted by law enforcement?",
      answer: "Yes, our Safety ID Kit meets the standards used by law enforcement agencies. The comprehensive information format is designed to provide authorities with exactly what they need for missing person cases and emergency situations."
    },
    {
      question: "How do I take proper fingerprints for the kit?",
      answer: "Use an ink pad to roll each finger from nail to nail on the provided fingerprint cards. Ensure clear, complete impressions for all 10 fingers. If you're having trouble, local police stations often offer fingerprinting services for child safety purposes."
    },
    {
      question: "What if my child is too young to provide some information?",
      answer: "Fill in what information you can and update the kit as your child grows. For very young children, focus on photos, physical description, medical information, and emergency contacts. Add more detailed information as they develop."
    },
    {
      question: "Can I share this kit with schools and babysitters?",
      answer: "Yes, sharing relevant portions with trusted caregivers, schools, and babysitters is recommended. However, be selective about what information you share and with whom, focusing on emergency contacts and medical information for regular caregivers."
    }
  ];

  const additionalResources = [
    {
      title: "National Center for Missing & Exploited Children",
      description: "Comprehensive resources and support for child safety",
      url: "https://www.missingkids.org",
      type: "External Resource"
    },
    {
      title: "FBI Child ID App",
      description: "Store photos and vital information on your mobile device",
      url: "https://www.fbi.gov/services/cjis/fingerprints-and-other-biometrics/child-id",
      type: "Mobile App"
    },
    {
      title: "Local Police Department Resources",
      description: "Contact your local police for community safety programs",
      url: "#contact",
      type: "Local Contact"
    },
    {
      title: "Emergency Preparedness Guide",
      description: "Comprehensive family emergency planning resources",
      url: "https://www.ready.gov/kids",
      type: "Government Resource"
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
                Resources & Support
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Everything you need for comprehensive child safety preparation
              </p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Free Child Safety ID Kit
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Download your comprehensive safety kit template instantly - 
                no registration required
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-card p-8 rounded-lg shadow-safe">
                  <div className="flex items-center mb-6">
                    <Download className="h-12 w-12 text-primary mr-4" />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Child Safety ID Kit (PDF)
                      </h3>
                      <p className="text-muted-foreground">Complete template package</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      "Personal details and photo pages",
                      "Fingerprint recording cards",
                      "Medical information forms",
                      "Emergency contact sheets",
                      "Dental chart template",
                      "Safety tips and guidelines"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-safety mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    <Download className="h-5 w-5 mr-2" />
                    Download Free Kit Now
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    📋 What's Included
                  </h4>
                  <p className="text-muted-foreground">
                    Professional-grade templates used by law enforcement and 
                    emergency responders. Easy-to-follow instructions ensure 
                    you capture all critical information needed for emergency situations.
                  </p>
                </div>
                
                <div className="bg-safety/5 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    🔒 Privacy & Security
                  </h4>
                  <p className="text-muted-foreground">
                    Your downloaded kit stays completely private on your device. 
                    We don't collect or store any personal information. 
                    You maintain full control over your family's data.
                  </p>
                </div>
                
                <div className="bg-trust/5 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    ✅ Trusted by Professionals
                  </h4>
                  <p className="text-muted-foreground">
                    Developed with input from law enforcement, medical professionals, 
                    and child safety experts to ensure comprehensive coverage 
                    of all critical identification information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Common questions about Child Safety ID Kits and family safety preparation
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-safe">
                  <CardHeader>
                    <CardTitle className="flex items-start">
                      <span className="text-primary font-bold mr-3 text-lg">Q:</span>
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start">
                      <span className="text-safety font-bold mr-3 text-lg">A:</span>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Additional Safety Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Curated resources from trusted organizations to enhance 
                your family's safety knowledge and preparedness
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalResources.map((resource, index) => (
                <Card key={index} className="shadow-safe hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-20 bg-destructive/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Shield className="h-16 w-16 text-destructive mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Emergency Information
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Critical contact information for emergency situations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-safe">
                <CardHeader>
                  <Phone className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <CardTitle>Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-destructive mb-2">911</div>
                  <p className="text-muted-foreground">
                    Police, Fire, Medical Emergency
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-safe">
                <CardHeader>
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Missing Children</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-primary mb-2">1-800-THE-LOST</div>
                  <p className="text-muted-foreground">
                    National Center for Missing & Exploited Children
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-safe">
                <CardHeader>
                  <Mail className="h-12 w-12 text-safety mx-auto mb-4" />
                  <CardTitle>Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium text-safety mb-2">
                    info@greenbrooktechnologies.net
                  </div>
                  <p className="text-muted-foreground">
                    Child Safety ID Kit Support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated on Child Safety
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Receive the latest safety tips, resources, and updates 
              directly in your inbox. No spam, just valuable safety information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button variant="safety" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;