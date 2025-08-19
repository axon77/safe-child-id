import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Trees, 
  Smartphone, 
  Users, 
  AlertTriangle,
  CheckCircle 
} from "lucide-react";

const SafetyTips = () => {
  const safetyCategories = [
    {
      icon: Home,
      title: "At Home Safety",
      color: "primary",
      tips: [
        "Teach your kids basic safety rules",
        "Make sure your children are ready to care for themselves",
        "Keep all doors and windows locked when your children are home alone",
        "Your children should not tell 'I am home alone' when a stranger calls",
        "Make sure that your child knows their full name, address and phone number, the place where you work or can be contacted and how to dial 100/911"
      ]
    },
    {
      icon: Trees,
      title: "Outdoor Safety",
      color: "safety",
      tips: [
        "Know where your child is at all times, and keep a list of their friends, addresses and phone numbers",
        "Teach children not to play in isolated areas of parks & playgrounds",
        "Never allow your kids to meet someone without your permission",
        "Establish clear boundaries for where children can play",
        "Teach children to stay in groups when possible",
        "Always inform someone of your planned route and expected return time"
      ]
    },
    {
      icon: Smartphone,
      title: "Online Safety",
      color: "trust",
      tips: [
        "Monitor your child's internet activity and social media use",
        "Teach children never to share personal information online",
        "Set up parental controls on devices and internet connections",
        "Discuss the dangers of meeting online friends in person",
        "Keep computers and devices in common areas",
        "Regularly review privacy settings on social media accounts"
      ]
    },
    {
      icon: Users,
      title: "Stranger Safety",
      color: "primary",
      tips: [
        "Never give out your personal information like name, address, phone number to strangers",
        "Tell your parents right away if someone makes you feel scared and uncomfortable",
        "Learn to identify trusted adults in your community",
        "Practice the 'buddy system' - stay with friends",
        "If approached by a stranger, move to a public place immediately",
        "Remember that strangers aren't always 'scary looking' people"
      ]
    }
  ];

  const emergencyPlan = [
    "After confirming that the person is missing, please contact nearest police station for necessary support",
    "Give them a description of person's clothing, along with your SAFETY ID Kit",
    "Make copies of your SAFETY ID Kit and circulate amongst friends and relatives for rapid action",
    "Paste 'MISSING' posters in and around neighbourhood and town with missing person's photo and vital information",
    "Be persistent in your search efforts and keep hope alive that missing person will be found and brought home safely",
    "Store this safety ID kit in a safe accessible place & update regularly"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Safety Tips for Children
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Essential safety guidelines to keep your children protected
              </p>
            </div>
          </div>
        </section>

        {/* Safety Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive Safety Guidelines
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Organized by environment and situation to help you teach your children 
                age-appropriate safety skills
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {safetyCategories.map((category, index) => (
                <Card key={index} className="shadow-safe hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${
                        category.color === 'primary' ? 'bg-primary/10' :
                        category.color === 'safety' ? 'bg-safety/10' :
                        'bg-trust/10'
                      }`}>
                        <category.icon className={`h-8 w-8 ${
                          category.color === 'primary' ? 'text-primary' :
                          category.color === 'safety' ? 'text-safety' :
                          'text-trust'
                        }`} />
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                            category.color === 'primary' ? 'text-primary' :
                            category.color === 'safety' ? 'text-safety' :
                            'text-trust'
                          }`} />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Action Plan */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Emergency Action Plan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                When a person goes missing - follow these critical steps immediately
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-safe border-l-4 border-destructive">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Plan of Action - When Someone Goes Missing
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {emergencyPlan.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-destructive text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Age-Appropriate Guidelines */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Age-Appropriate Safety Education
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-safe">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ages 3-6: Foundation Building
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Know their full name and parents' names</li>
                  <li>• Recognize safe vs. unsafe situations</li>
                  <li>• Understand basic stranger danger</li>
                  <li>• Learn emergency numbers (911)</li>
                  <li>• Practice staying close to trusted adults</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-safe">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ages 7-12: Skill Development
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Memorize address and phone numbers</li>
                  <li>• Understand online safety basics</li>
                  <li>• Practice home alone safety rules</li>
                  <li>• Learn to identify trusted community helpers</li>
                  <li>• Develop situational awareness skills</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-safe">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ages 13+: Advanced Awareness
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Advanced online safety and privacy</li>
                  <li>• Dating and social safety guidelines</li>
                  <li>• Transportation safety protocols</li>
                  <li>• Emergency preparedness skills</li>
                  <li>• Teaching younger siblings safety</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Resources */}
        <section className="py-20 bg-safety-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Safety Resources
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download our comprehensive Child Safety ID Kit for complete 
              family protection resources and emergency preparedness tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Download Safety Kit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Contact Safety Experts
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SafetyTips;