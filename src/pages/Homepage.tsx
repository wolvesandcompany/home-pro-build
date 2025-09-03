import { useState } from 'react';
import { Star, Shield, Clock, Award, Phone, Mail, CheckCircle, ArrowRight, Zap, Wrench, Home, Sparkles, Leaf, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import heroImage from '@/assets/hero-home-services.jpg';

const Homepage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      icon: Wrench,
      title: 'Plumbing',
      description: 'Emergency repairs, installations, and maintenance',
      features: ['24/7 Emergency Service', 'Licensed Plumbers', 'Free Estimates']
    },
    {
      icon: Zap,
      title: 'Electrical',
      description: 'Wiring, outlets, panels, and electrical repairs',
      features: ['Licensed Electricians', 'Safety Inspections', 'Code Compliant']
    },
    {
      icon: Home,
      title: 'HVAC',
      description: 'Heating, cooling, and ventilation services',
      features: ['Energy Efficient', 'Seasonal Maintenance', 'Emergency Repairs']
    },
    {
      icon: Wrench,
      title: 'Handyman',
      description: 'General repairs and home improvement',
      features: ['Skilled Craftsmen', 'Quality Materials', 'Satisfaction Guaranteed']
    },
    {
      icon: Sparkles,
      title: 'Cleaning',
      description: 'Professional home and office cleaning',
      features: ['Eco-Friendly Products', 'Bonded & Insured', 'Flexible Scheduling']
    },
    {
      icon: Leaf,
      title: 'Landscaping',
      description: 'Lawn care, gardening, and outdoor maintenance',
      features: ['Seasonal Services', 'Professional Equipment', 'Design Consultation']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown',
      rating: 5,
      text: 'HomeMax Services fixed our plumbing emergency at 2 AM. Professional, fast, and reasonably priced!',
      service: 'Emergency Plumbing'
    },
    {
      name: 'Mike Chen',
      location: 'Northside',
      rating: 5,
      text: 'Excellent electrical work. The team was punctual, clean, and explained everything clearly.',
      service: 'Electrical Installation'
    },
    {
      name: 'Emily Rodriguez',
      location: 'West Hills',
      rating: 5,
      text: 'Our HVAC system runs perfectly after their maintenance service. Highly recommend!',
      service: 'HVAC Maintenance'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed professionals with comprehensive insurance coverage'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock availability for urgent home service needs'
    },
    {
      icon: Award,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee on all work performed'
    },
    {
      icon: CheckCircle,
      title: 'Background Checked',
      description: 'All technicians undergo thorough background screening'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Professional Home Services
            <span className="block text-secondary">You Can Trust</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            13+ years of trusted service • Licensed & Insured • Available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="text-lg">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="tel:5551234357">
              <Button variant="cta" size="xl" className="text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-HELP
              </Button>
            </a>
          </div>
          <div className="mt-8 text-sm opacity-75">
            Emergency Service Available • Same-Day Response
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Home Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to routine maintenance, we're your trusted partner for all home service needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth group">
                <CardContent className="p-6">
                  <div className="bg-gradient-service p-3 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-smooth">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose HomeMax Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              13+ years of excellence with thousands of satisfied customers across the metro area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-trust p-4 rounded-full w-fit mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Over 5,000 satisfied customers and counting!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.service}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Quote Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Get Your Free Quote Today
              </h2>
              <p className="text-xl opacity-90">
                No hidden fees • Upfront pricing • Same-day service available
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Ready to Get Started?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Free, no-obligation estimates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Licensed and insured professionals
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    100% satisfaction guarantee
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Emergency service available 24/7
                  </li>
                </ul>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-secondary mr-3" />
                    <div>
                      <div className="font-semibold">Call Now: (555) 123-HELP</div>
                      <div className="text-sm opacity-75">Available 24/7 for emergencies</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-secondary mr-3" />
                    <div>
                      <div className="font-semibold">info@homemax.com</div>
                      <div className="text-sm opacity-75">We respond within 1 hour</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-large">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Request Free Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white"
                      />
                    </div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white"
                    />
                    <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select Service Needed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                        <SelectItem value="hvac">HVAC</SelectItem>
                        <SelectItem value="handyman">Handyman</SelectItem>
                        <SelectItem value="cleaning">Cleaning</SelectItem>
                        <SelectItem value="landscaping">Landscaping</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      placeholder="Describe your project or issue..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white"
                      rows={4}
                    />
                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Get Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;