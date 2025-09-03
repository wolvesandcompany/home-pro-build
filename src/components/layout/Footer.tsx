import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Shield, Award, Clock } from 'lucide-react';

const Footer = () => {
  const services = [
    'Plumbing',
    'Electrical',
    'HVAC',
    'Handyman',
    'Cleaning',
    'Landscaping',
  ];

  const serviceAreas = [
    'Downtown',
    'Northside',
    'Southside',
    'East End',
    'West Hills',
    'Suburbs',
  ];

  return (
    <footer className="bg-muted-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <div className="text-white font-bold text-lg">HM</div>
              </div>
              <div>
                <div className="text-lg font-bold">HomeMax Services</div>
                <div className="text-sm text-gray-300">Your Trusted Local Experts</div>
              </div>
            </div>
            <p className="text-gray-300">
              Professional home services with over 13 years of experience. Licensed, insured, and committed to your satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-primary transition-smooth"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-gray-300">24/7 Emergency</div>
                  <a href="tel:5551234357" className="font-semibold hover:text-primary transition-smooth">
                    (555) 123-HELP
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-gray-300">Email</div>
                  <a href="mailto:info@homemax.com" className="hover:text-primary transition-smooth">
                    info@homemax.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-gray-300">Service Area</div>
                  <div>Metro Area & Suburbs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-success" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-6 w-6 text-secondary" />
              <span className="font-semibold">BBB A+ Rated</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-semibold">24/7 Emergency Service</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2024 HomeMax Services. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-primary text-sm transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-primary text-sm transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;