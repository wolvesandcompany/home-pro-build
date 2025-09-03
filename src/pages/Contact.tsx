import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    address: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: '24/7 Emergency Line',
      value: '(555) 123-HELP',
      link: 'tel:5551234357',
      description: 'Call now for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Response within 1 hour',
      value: 'info@homemax.com',
      link: 'mailto:info@homemax.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      subtitle: 'Metro Area & Suburbs',
      value: 'Check Availability',
      link: '#',
      description: 'We serve the entire metropolitan area'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Emergency Service', hours: '24/7 Available' }
  ];

  const serviceAreas = [
    'Downtown', 'Northside', 'Southside', 'East End', 'West Hills', 'Suburbs',
    'Riverside', 'Oak Park', 'Pine Valley', 'Maple Heights', 'Cedar Grove', 'Elmwood'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        urgency: '',
        address: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact HomeMax Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Get in touch for professional home services • Available 24/7 for emergencies
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-secondary text-secondary-foreground py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Emergency Service Available 24/7</span>
            <a href="tel:5551234357" className="underline hover:no-underline">
              Call (555) 123-HELP
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to reach us. We respond quickly to all inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth group">
                <CardContent className="p-6">
                  <div className="bg-gradient-service p-4 rounded-full w-fit mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <div className="text-sm text-muted-foreground mb-3">{method.subtitle}</div>
                  <a 
                    href={method.link}
                    className="text-primary font-semibold text-lg block mb-2 hover:text-primary-dark transition-smooth"
                  >
                    {method.value}
                  </a>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl">Request Service or Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 1 hour during business hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-success p-4 rounded-full w-fit mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-success mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your message has been sent. We'll contact you within 1 hour.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone *</label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Service Needed *</label>
                        <Select onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="electrical">Electrical</SelectItem>
                            <SelectItem value="hvac">HVAC</SelectItem>
                            <SelectItem value="handyman">Handyman</SelectItem>
                            <SelectItem value="cleaning">Cleaning</SelectItem>
                            <SelectItem value="landscaping">Landscaping</SelectItem>
                            <SelectItem value="pest-control">Pest Control</SelectItem>
                            <SelectItem value="appliance">Appliance Repair</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Urgency</label>
                        <Select onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="How urgent?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                            <SelectItem value="urgent">Urgent (Today)</SelectItem>
                            <SelectItem value="soon">This Week</SelectItem>
                            <SelectItem value="flexible">Flexible Timing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Service Address</label>
                      <Input
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Street address, City, ZIP"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Description *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your project or issue in detail..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Request
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields. We respond within 1 hour during business hours.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Business Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className={schedule.day === 'Emergency Service' ? 'text-secondary font-semibold' : 'text-muted-foreground'}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                    <div className="flex items-center text-secondary font-semibold">
                      <Phone className="mr-2 h-4 w-4" />
                      Emergency calls answered 24/7
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We proudly serve the entire metropolitan area and surrounding suburbs:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="bg-muted p-2 rounded text-sm text-center">
                        {area}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Check Service Availability
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-gradient-hero text-white">
                <CardHeader>
                  <CardTitle>Need Emergency Service?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90 mb-4">
                    Don't wait for business hours. Call our emergency line now for immediate assistance.
                  </p>
                  <a href="tel:5551234357">
                    <Button variant="cta" size="lg" className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Emergency Line
                    </Button>
                  </a>
                  <div className="text-center text-sm opacity-75 mt-3">
                    Average response time: Under 2 hours
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;