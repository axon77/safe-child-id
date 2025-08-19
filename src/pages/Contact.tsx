import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  Globe
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                We're here to help protect your family - reach out anytime
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our Child Safety ID Kit or need support? 
                  We're here to help ensure your family's safety and security.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Safety Kit Questions</option>
                      <option>Partnership Inquiry</option>
                      <option>Media Request</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="How can we help protect your family?"
                      required
                    ></textarea>
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Yespanchi is committed to supporting families 
                    worldwide with comprehensive child safety solutions.
                  </p>
                </div>

                {/* Office Locations */}
                <div className="space-y-6">
                  <Card className="shadow-safe">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="h-6 w-6 text-primary mr-3" />
                        Main Office
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-1 mr-3" />
                        <div>
                          <p className="font-medium text-foreground">Yespanchi</p>
                          <p className="text-muted-foreground">6A, 60, TM Maistry St, Extn</p>
                          <p className="text-muted-foreground">Thiruvanmiyur, Chennai</p>
                          <p className="text-muted-foreground">Tamil Nadu 600041</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-muted-foreground mr-3" />
                        <span className="text-muted-foreground">Mon - Fri: 9:30 AM - 6:30 PM IST</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Direct Contact
                  </h3>
                  
                  <div className="flex items-center p-4 bg-card rounded-lg shadow-safe">
                    <Mail className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <a 
                        href="mailto:info@yespanchi.com"
                        className="text-primary hover:underline"
                      >
                        info@yespanchi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-card rounded-lg shadow-safe">
                    <Globe className="h-6 w-6 text-safety mr-4" />
                    <div>
                      <p className="font-medium text-foreground">Website</p>
                      <a 
                        href="https://www.yespanchi.com"
                        className="text-safety hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.yespanchi.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    📞 Response Time
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to all inquiries within 24 hours during 
                    business days. For urgent safety concerns, please contact 
                    your local emergency services immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Notice */}
        <section className="py-16 bg-destructive/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-6">
                <Phone className="h-8 w-8 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Emergency Situations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you are experiencing an emergency situation involving a missing child, 
                please contact your local emergency services immediately at <strong>911</strong> 
                or your local emergency number. Our Child Safety ID Kit support is for 
                preparation and general inquiries only.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;