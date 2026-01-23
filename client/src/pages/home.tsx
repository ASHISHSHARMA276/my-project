import { Link } from "wouter";
import { 
  Truck, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Package, 
  Factory,
  Warehouse,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";

// Import the generated asset
import heroImage from '@assets/generated_images/cinematic_semi-truck_on_highway_at_sunrise.png';
import companyLogo from '@assets/company_logo_1769003107729.jpg';
import founderPhoto from '@assets/IMG-20260121-WA0003_1769007247688.jpg';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-secondary-foreground">
      
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-14 md:h-14 overflow-hidden rounded-lg border border-secondary/20">
              <img 
                src={companyLogo} 
                alt="Ashoka Transolutions Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-2xl font-heading font-black uppercase tracking-tighter leading-none ${isScrolled ? "text-primary" : "text-white"}`}>
                Ashoka
              </span>
              <span className={`text-[10px] md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] leading-none mt-0.5 ${isScrolled ? "text-secondary" : "text-secondary"}`}>
                Transolutions
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wide ${
                  isScrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {item === "About" ? "About Us" : item}
              </button>
            ))}
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <div className="flex flex-col gap-6 mt-10">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-lg font-bold uppercase text-left hover:text-secondary transition-colors"
                  >
                    {item === "About" ? "About Us" : item}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Truck on highway" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center text-white pt-20">
          <div className="inline-block px-3 py-1 mb-4 border border-secondary/50 rounded-full bg-secondary/10 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Fleet Owners & Transport Contractors</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Reliable <span className="text-secondary">FTL</span> Transport <br className="hidden md:block" />
            Solutions for Industry
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Delivering safe, on-time logistics services with over 24 years of experience. Your trusted partner for heavy transport.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-6 md:py-12 relative z-20 -mt-12 md:-mt-20 mx-4 md:mx-6 lg:mx-20 rounded-xl shadow-xl border border-white/10 mb-2 md:mb-0">
        <div className="grid grid-cols-2 gap-4 md:gap-8 text-center text-white divide-x divide-white/20 px-4">
          <div className="py-1 md:p-4">
            <h3 className="text-xl md:text-4xl font-heading font-black mb-0.5 md:mb-1">24+</h3>
            <p className="font-bold opacity-90 uppercase tracking-tighter md:tracking-wide text-[9px] md:text-sm">Years Experience</p>
          </div>
          <div className="py-1 md:p-4">
            <h3 className="text-xl md:text-4xl font-heading font-black mb-0.5 md:mb-1">100%</h3>
            <p className="font-bold opacity-90 uppercase tracking-tighter md:tracking-wide text-[9px] md:text-sm">Safe Delivery</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-xl transform -rotate-2"></div>
              <div className="bg-primary text-white p-4 md:p-10 rounded-xl relative overflow-hidden flex flex-row gap-4 md:gap-8 items-start">
                <div className="w-24 h-32 md:w-48 md:h-64 flex-shrink-0 relative rounded-lg overflow-hidden border border-secondary/30 shadow-2xl">
                  <img 
                    src={founderPhoto} 
                    alt="Anil Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
                    <Truck className="w-48 h-48" />
                  </div>
                  <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-4 font-heading">Founder's Message</h3>
                  <p className="text-[10px] md:text-base text-gray-300 mb-2 md:mb-6 leading-tight md:leading-relaxed italic border-l-2 md:border-l-4 border-secondary pl-2 md:pl-4 relative z-10 text-left">
                    "At Ashoka Transolutions, timely and safe delivery is not merely a promise but a fundamental operating principle. We take full ownership of every shipment from dispatch to final delivery."
                  </p>
                  <div className="relative z-10">
                    <h4 className="text-[11px] md:text-lg font-bold text-secondary leading-none">Anil Kumar</h4>
                    <p className="text-[9px] md:text-sm text-gray-400 mt-0.5">Founder, 24+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">Benchmarks in Reliability & Service Quality</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ashoka Transolutions is a newly registered transport company (2026), built on the solid foundation of over two decades of industry expertise. We specialize in Full Truck Load (FTL) services, connecting industrial hubs with seamless logistics solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-2 rounded-full mt-1">
                    <ShieldCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Safety First</h4>
                    <p className="text-sm text-gray-600">Strict operational discipline and accountability at every stage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-2 rounded-full mt-1">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Timely Delivery</h4>
                    <p className="text-sm text-gray-600">Commitment to ensuring every consignment arrives as scheduled.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">Our Transport Services</h2>
            <p className="text-gray-600">
              We provide comprehensive logistics solutions tailored to meet the diverse needs of our industrial clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Truck className="w-10 h-10 text-secondary" />}
              title="Full Truck Load (FTL)"
              description="Dedicated transportation for large shipments that require an entire truck, ensuring faster and safer delivery."
            />
            <ServiceCard 
              icon={<Factory className="w-10 h-10 text-secondary" />}
              title="Industrial & Commercial"
              description="Specialized handling for heavy machinery, raw materials, and finished commercial goods."
            />
            <ServiceCard 
              icon={<Warehouse className="w-10 h-10 text-secondary" />}
              title="Warehouse Logistics"
              description="Seamless Factory-to-Warehouse and Warehouse-to-Factory movement services."
            />
            <ServiceCard 
              icon={<MapPin className="w-10 h-10 text-secondary" />}
              title="Long-Haul & Regional"
              description="Extensive network covering both long-distance inter-state transport and regional distribution."
            />
            <ServiceCard 
              icon={<Package className="w-10 h-10 text-secondary" />}
              title="Safe Handling"
              description="Goods are handled with extreme care to maintain cargo integrity throughout the journey."
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-10 h-10 text-secondary" />}
              title="Dedicated Vehicles"
              description="Fleet customization and dedicated vehicle allocation based on specific client requirements."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
           <Truck className="w-[500px] h-[500px] -mr-32 -mt-32" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Why Choose Ashoka Transolutions?</h2>
              <div className="space-y-6">
                {[
                  "24+ years of transport industry experience",
                  "Strong commitment to timely delivery",
                  "Safe and responsible handling of goods",
                  "Transparent communication and updates",
                  "Focus on long-term customer partnerships"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <ShieldCheck className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Our Promise</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Ashoka Transolutions, our promise is rooted in responsibility, reliability, and long-term partnership. We commit to delivering dependable Full Truck Load (FTL) transport services with consistent on-time performance.
              </p>
              <Separator className="bg-white/10 mb-6" />
              <p className="text-gray-300">
                Our focus is not only on moving goods, but on protecting our clients' supply chains through disciplined execution and clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">Contact Details</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Reach out to us for reliable and disciplined FTL transport services. Our team is ready to support your logistics needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address Card */}
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group">
                <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                  <MapPin className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-white font-bold text-xl mb-4 uppercase tracking-tight">Visit Us</h4>
                <address className="text-gray-400 not-italic leading-relaxed text-sm">
                  #H NO 10519, PARASHAR COMPLEX,<br />
                  AZAD GARH ROAD, UTTAM VIHAR,<br />
                  NEAR BALAJI SWEETS, ROHTAK - 124001, (Haryana)
                </address>
              </div>

              {/* Phone Card */}
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group">
                <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                  <Phone className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-white font-bold text-xl mb-4 uppercase tracking-tight">Call Us</h4>
                <div className="space-y-2">
                  <a href="tel:9991811671" className="block text-gray-400 hover:text-secondary transition-colors text-lg font-medium">9991811671</a>
                  <a href="tel:9588794484" className="block text-gray-400 hover:text-secondary transition-colors text-lg font-medium">9588794484</a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group">
                <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                  <Mail className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-white font-bold text-xl mb-4 uppercase tracking-tight">Email Us</h4>
                <a href="mailto:contact@ashokatransolutions.com" className="text-gray-400 hover:text-secondary transition-colors break-all font-medium">
                  contact@ashokatransolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-secondary/20 mb-4">
              <img src={companyLogo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-heading font-black uppercase tracking-tighter">
              Ashoka <span className="text-secondary">Transolutions</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            © 2026 Ashoka Transolutions. All rights reserved. <br/>
            Fleet Owners & Transport Contractors. Providing reliable trucking solutions with over two decades of excellence.
          </p>
          <div className="flex justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(item => (
              <a key={item} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/20">
      <CardContent className="p-8">
        <div className="mb-6 bg-secondary/5 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
          {/* We clone the element to change props if needed, but CSS targeting is better */}
          <div className="group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3 font-heading group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
