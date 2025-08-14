import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';
import engineeringLab from '@/assets/engineering-lab.jpg';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '2000+',
      label: 'Students Enrolled',
      description: 'Active learners across all programs'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years of Excellence',
      description: 'Dedicated to quality education'
    },
    {
      icon: BookOpen,
      number: '5',
      label: 'Specialized Programs',
      description: 'Comprehensive technical education'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Employment Rate',
      description: 'Successful career placements'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
            About <span className="text-primary">BNIST</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up stagger-1">
            Empowering the next generation of technical professionals through innovative education and practical excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="fade-in-left">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Our Mission & Vision
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Bahaul Huq NPI Institute of Science and Technology (BNIST) stands as a beacon of 
                technical excellence in Bangladesh, committed to fostering innovation and practical 
                knowledge in the fields of engineering and technology.
              </p>
              <p>
                Our institute bridges the gap between theoretical knowledge and industry requirements, 
                ensuring our graduates are well-prepared for the challenges of modern technological 
                advancement.
              </p>
              <p>
                With state-of-the-art facilities and experienced faculty, we provide comprehensive 
                education that combines academic rigor with hands-on experience, preparing students 
                for successful careers in their chosen fields.
              </p>
            </div>
            
            <div className="mt-8">
              <a href="#programs" className="btn-academic">
                Discover Our Programs
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={engineeringLab} 
                alt="Engineering Laboratory"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`academic-card text-center fade-in-up stagger-${index + 1}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                {stat.number}
              </h3>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h4>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;