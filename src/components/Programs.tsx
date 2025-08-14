import { Computer, Hammer, Zap, Cog, Shirt } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Hammer,
      title: 'Civil Technology',
      description: 'Comprehensive program covering structural design, construction management, and infrastructure development.',
      features: ['Structural Engineering', 'Construction Management', 'Surveying & Mapping', 'Building Materials']
    },
    {
      icon: Computer,
      title: 'Computer Technology',
      description: 'Modern curriculum in software development, networking, and emerging technologies.',
      features: ['Programming & Development', 'Network Administration', 'Database Management', 'Cybersecurity']
    },
    {
      icon: Zap,
      title: 'Electrical Technology',
      description: 'Power systems, electronics, and automation technology for the modern electrical industry.',
      features: ['Power Systems', 'Control Systems', 'Electronics Design', 'Renewable Energy']
    },
    {
      icon: Cog,
      title: 'Mechanical Technology',
      description: 'Mechanical design, manufacturing processes, and advanced production technologies.',
      features: ['Manufacturing Processes', 'CAD/CAM', 'Thermodynamics', 'Machine Design']
    },
    {
      icon: Shirt,
      title: 'Textile Technology',
      description: 'Comprehensive textile engineering including fiber science, fabric design, and production.',
      features: ['Fiber Science', 'Fabric Design', 'Dyeing & Printing', 'Quality Control']
    }
  ];

  return (
    <section id="programs" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up stagger-1">
            Choose from our comprehensive range of technology programs designed to meet industry demands
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`academic-card group cursor-pointer fade-in-up stagger-${(index % 3) + 1}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <program.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {program.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground mb-3">Key Areas:</h4>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More Button */}
              <div className="mt-6 pt-6 border-t border-border">
                <button className="text-primary font-semibold hover:text-primary-dark transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 fade-in-up">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who have built their careers with BNIST's comprehensive technical education.
            </p>
            <a href="#admissions" className="btn-academic">
              Apply for Admission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;