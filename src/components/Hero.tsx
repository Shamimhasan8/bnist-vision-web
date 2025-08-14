import { ChevronDown } from 'lucide-react';
import heroCampus from '@/assets/hero-campus.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroCampus} 
          alt="BNIST Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
          Bahaul Huq NPI<br />
          <span className="text-gold">Institute of Science</span><br />
          & Technology
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 fade-in-up stagger-1 opacity-90">
          Shaping Tomorrow's Engineers and Technologists
        </p>
        
        <p className="text-lg mb-12 fade-in-up stagger-2 opacity-80 max-w-2xl mx-auto">
          Excellence in technical education with cutting-edge programs in Civil, Computer, Electrical, Mechanical, and Textile Technology
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
          <a href="#programs" className="btn-academic">
            Explore Programs
          </a>
          <a href="#about" className="btn-outline-academic bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;