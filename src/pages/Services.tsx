import { Wrench, Zap, Home, Sparkles, Leaf, Bug, Shield, Clock, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Plumbing Services',
      description: 'Professional plumbing solutions for your home and business',
      services: [
        'Emergency plumbing repairs',
        'Pipe installation and replacement',
        'Drain cleaning and unclogging',
        'Water heater installation/repair',
        'Fixture installation',
        'Leak detection and repair'
      ],
      pricing: 'Starting at $89/hour',
      emergency: true,
      badge: 'Most Popular'
    },
    {
      icon: Zap,
      title: 'Electrical Services',
      description: 'Licensed electrical work for safety and efficiency',
      services: [
        'Electrical panel upgrades',
        'Outlet and switch installation',
        'Lighting installation',
        'Wiring and rewiring',
        'Electrical inspections',
        'Generator installation'
      ],
      pricing: 'Starting at $125/hour',
      emergency: true,
      badge: 'Licensed'
    },
    {
      icon: Home,
      title: 'HVAC Services',
      description: 'Heating, ventilation, and air conditioning experts',
      services: [
        'AC installation and repair',
        'Furnace maintenance',
        'Duct cleaning and repair',
        'Thermostat installation',
        'Air quality improvement',
        'Seasonal maintenance'
      ],
      pricing: 'Starting at $95/hour',
      emergency: true,
      badge: 'Energy Efficient'
    },
    {
      icon: Wrench,
      title: 'Handyman Services',
      description: 'General repairs and home improvement solutions',
      services: [
        'Furniture assembly',
        'Wall mounting and hanging',
        'Door and window repair',
        'Drywall repair and painting',
        'Tile and flooring work',
        'General home repairs'
      ],
      pricing: 'Starting at $65/hour',
      emergency: false,
      badge: 'Versatile'
    },
    {
      icon: Sparkles,
      title: 'Cleaning Services',
      description: 'Professional cleaning for homes and offices',
      services: [
        'Regular house cleaning',
        'Deep cleaning services',
        'Move-in/move-out cleaning',
        'Office cleaning',
        'Carpet cleaning',
        'Window cleaning'
      ],
      pricing: 'Starting at $120/visit',
      emergency: false,
      badge: 'Eco-Friendly'
    },
    {
      icon: Leaf,
      title: 'Landscaping Services',
      description: 'Lawn care and outdoor maintenance specialists',
      services: [
        'Lawn mowing and edging',
        'Garden design and planting',
        'Tree trimming and removal',
        'Irrigation system installation',
        'Seasonal cleanup',
        'Hardscape installation'
      ],
      pricing: 'Starting at $75/hour',
      emergency: false,
      badge: 'Seasonal'
    },
    {
      icon: Bug,
      title: 'Pest Control',
      description: 'Safe and effective pest management solutions',
      services: [
        'Insect control and elimination',
        'Rodent control programs',
        'Preventive treatments',
        'Termite inspection',
        'Wildlife removal',
        'Ongoing maintenance plans'
      ],
      pricing: 'Starting at $150/treatment',
      emergency: true,
      badge: 'Safe & Effective'
    },
    {
      icon: Wrench,
      title: 'Appliance Repair',
      description: 'Expert repair for all major home appliances',
      services: [
        'Refrigerator repair',
        'Washer and dryer service',
        'Dishwasher repair',
        'Oven and stove repair',
        'Garbage disposal service',
        'Small appliance repair'
      ],
      pricing: 'Starting at $85/hour',
      emergency: true,
      badge: 'Same Day'
    }
  ];

  const emergencyFeatures = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Emergency services available around the clock'
    },
    {
      icon: Phone,
      title: 'Rapid Response',
      description: 'Average response time under 2 hours'
    },
    {
      icon: Shield,
      title: 'Licensed Professionals',
      description: 'All emergency technicians are fully licensed'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete Home Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Professional, licensed, and insured services for all your home needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-HELP
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to routine maintenance, we provide comprehensive home services with guaranteed satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-medium transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-gradient-service p-3 rounded-lg group-hover:shadow-glow transition-smooth">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="font-semibold text-primary">{service.pricing}</div>
                      {service.emergency && (
                        <div className="text-xs text-secondary font-medium">Emergency Available</div>
                      )}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              24/7 Emergency Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              When home emergencies strike, we're ready to respond quickly with professional solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {emergencyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-trust p-4 rounded-full w-fit mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-hero text-white p-8 rounded-lg shadow-large max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
              <p className="text-lg opacity-90 mb-6">
                Don't wait - call now for immediate assistance with your home emergency.
              </p>
              <a href="tel:5551234357">
                <Button variant="cta" size="xl" className="text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency Line
                </Button>
              </a>
              <div className="mt-4 text-sm opacity-75">
                Available 24/7 • Average response time under 2 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              We proudly serve the entire metro area and surrounding suburbs with professional home services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center max-w-4xl mx-auto mb-12">
              {['Downtown', 'Northside', 'Southside', 'East End', 'West Hills', 'Suburbs', 'Riverside', 'Oak Park', 'Pine Valley', 'Maple Heights', 'Cedar Grove', 'Elmwood'].map((area, index) => (
                <div key={index} className="bg-muted p-3 rounded-lg">
                  <div className="font-medium text-sm">{area}</div>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg">
              Check Service Availability
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;