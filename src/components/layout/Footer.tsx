import { Link } from "react-router-dom";
import { Shield, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust text-trust-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-white" />
              <span className="font-bold text-xl text-white">
                Child Safety ID Kit
              </span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Protecting what matters most - your child's safety. Comprehensive
              safety ID kits to help keep your children safe and secure.
            </p>
            <div className="text-sm text-white/60">
              <p>© 2024 Greenbrook Technologies LLC</p>
              <p>All rights reserved</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/safety-tips"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  <p className="font-medium">US Office</p>
                  <p>1275 Bound Brook Road, Ste 2</p>
                  <p>Middlesex, NJ 08846, USA</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  <p className="font-medium">India Office</p>
                  <p>70, Gandhi Bazaar</p>
                  <p>Basavanagudi, Bangalore, Pin - 560 004</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-white/60" />
                <a
                  href="mailto:info@greenbrooktechnologies.net"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  info@greenbrooktechnologies.net
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            Child Safety ID Kit is designed to help parents protect their
            children. Always contact local authorities in case of emergency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;