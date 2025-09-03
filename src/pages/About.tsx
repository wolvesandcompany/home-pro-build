import { Shield, Award, Users, Clock, CheckCircle, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { number: '13+', label: 'Years of Experience' },
    { number: '5,000+', label: 'Satisfied Customers' },
    { number: '25,000+', label: 'Jobs Completed' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  const team = [
    {
      name: 'Mike Thompson',
      role: 'Master Plumber & Founder',
      experience: '15 years',
      certifications: ['Licensed Master Plumber', 'Backflow Prevention Certified'],
      description: 'Founded HomeMax Services with a vision to provide honest, reliable home services.'
    },
    {
      name: 'Sarah Chen',
      role: 'Licensed Electrician',
      experience: '12 years',
      certifications: ['Master Electrician License', 'Solar Installation Certified'],
      description: 'Specializes in residential electrical work and energy-efficient solutions.'
    },
    {
      name: 'David Rodriguez',
      role: 'HVAC Specialist',
      experience: '10 years',
      certifications: ['HVAC Excellence Certified', 'EPA 608 Certified'],
      description: 'Expert in heating and cooling systems with focus on energy efficiency.'
    },
    {
      name: 'Jennifer Walsh',
      role: 'Customer Service Manager',
      experience: '8 years',
      certifications: ['Customer Service Excellence', 'Project Management'],
      description: 'Ensures every customer receives exceptional service from start to finish.'
    }
  ];

  const certifications = [
    { name: 'Better Business Bureau', rating: 'A+', icon: Award },
    { name: 'Licensed & Bonded', status: 'Fully Insured', icon: Shield },
    { name: 'Industry Association', status: 'Member', icon: Users },
    { name: 'Emergency Services', status: '24/7 Available', icon: Clock }
  ];

  const values = [
    {
      title: 'Honesty & Transparency',
      description: 'Upfront pricing with no hidden fees. We explain what we do and why.',
      icon: CheckCircle
    },
    {
      title: 'Quality Workmanship',
      description: 'We use quality materials and proven techniques to ensure lasting results.',
      icon: Award
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We\'re not done until you\'re happy.',
      icon: Star
    },
    {
      title: 'Reliable Service',
      description: 'On-time arrivals, professional service, and follow-up to ensure satisfaction.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About HomeMax Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Your trusted local home service experts since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg mb-6">
                  HomeMax Services was founded in 2010 with a simple mission: to provide honest, reliable, and professional home services to our local community. What started as a small plumbing business has grown into a comprehensive home services company, but our core values remain the same.
                </p>
                <p className="text-lg mb-6">
                  We believe that your home is your sanctuary, and when something goes wrong, you need professionals you can trust to fix it right the first time. That's why we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service.
                </p>
                <p className="text-lg">
                  Today, we're proud to serve thousands of customers across the metro area with a team of licensed, insured, and background-checked professionals who share our commitment to excellence.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and ensure you receive the best possible service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-trust p-4 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are licensed, insured, and committed to providing exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-service rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium text-sm mb-2">{member.role}</div>
                  <div className="text-muted-foreground text-sm mb-4">{member.experience} experience</div>
                  <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                  <div className="space-y-1">
                    {member.certifications.map((cert, i) => (
                      <div key={i} className="text-xs bg-muted px-2 py-1 rounded">
                        {cert}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust Signals */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Licensed & Certified
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We maintain all necessary licenses, certifications, and insurance to protect you and ensure quality work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-soft">
                <div className="bg-gradient-service p-3 rounded-full w-fit mx-auto mb-4">
                  <cert.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <div className="text-sm text-primary font-medium">
                  {cert.rating || cert.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience the HomeMax Difference?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their home service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Get Free Quote
            </Button>
            <a href="tel:5551234357">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-HELP
              </Button>
            </a>
          </div>
          <div className="mt-6 text-sm opacity-75">
            Available 24/7 for emergency service
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;