import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import bnistLogo from '@/assets/bnist-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About BNIST', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
    { name: 'Faculty', href: '#' },
    { name: 'Student Life', href: '#' }
  ];

  const programs = [
    { name: 'Civil Technology', href: '#programs' },
    { name: 'Computer Technology', href: '#programs' },
    { name: 'Electrical Technology', href: '#programs' },
    { name: 'Mechanical Technology', href: '#programs' },
    { name: 'Textile Technology', href: '#programs' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Institute Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={bnistLogo} 
                  alt="BNIST Logo" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="font-bold text-lg text-background">BNIST</h3>
                  <p className="text-sm text-background/70">Institute of Science & Technology</p>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed mb-6">
                Empowering the next generation of engineers and technologists through excellence in technical education and innovation.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-background">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-background">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a
                      href={program.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-background">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/80 leading-relaxed">
                      Polytechnic Road, Goaldi<br />
                      Aminpur, Sonargaon<br />
                      Narayanganj 1440, Bangladesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:bnist.edu@gmail.com"
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    bnist.edu@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-background/80">
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © 2024 Bahaul Huq NPI Institute of Science and Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors duration-200">
                Academic Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;