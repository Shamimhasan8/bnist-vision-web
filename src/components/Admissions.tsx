import { useState } from 'react';
import { Calendar, FileText, Users, CheckCircle } from 'lucide-react';
import graduatesImage from '@/assets/graduates.jpg';

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const admissionSteps = [
    {
      icon: FileText,
      title: 'Application Form',
      description: 'Complete the online application form with your personal and academic details.'
    },
    {
      icon: Users,
      title: 'Document Submission',
      description: 'Submit required documents including academic transcripts and certificates.'
    },
    {
      icon: Calendar,
      title: 'Interview Process',
      description: 'Participate in our admission interview and assessment process.'
    },
    {
      icon: CheckCircle,
      title: 'Enrollment',
      description: 'Complete your enrollment and begin your journey at BNIST.'
    }
  ];

  const programs = [
    'Civil Technology',
    'Computer Technology', 
    'Electrical Technology',
    'Mechanical Technology',
    'Textile Technology'
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.program) newErrors.program = 'Please select a program';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send the data to a server
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <section id="admissions" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
            <span className="text-primary">Admissions</span> Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up stagger-1">
            Start your journey toward a successful career in technology. Join our community of innovative learners.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {admissionSteps.map((step, index) => (
            <div key={index} className={`text-center fade-in-up stagger-${index + 1}`}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <div className="w-full h-1 bg-primary/20 mb-4 relative">
                <div className="absolute top-0 left-0 h-full bg-primary rounded" style={{width: '100%'}}></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Application Form */}
          <div className="fade-in-left">
            <div className="academic-card">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Apply Now
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-success mb-4">Application Submitted!</h4>
                  <p className="text-muted-foreground">
                    Thank you for your interest in BNIST. We will contact you soon with further information.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.name ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.email ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.phone ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Program of Interest *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.program ? 'border-destructive' : 'border-border'
                      }`}
                    >
                      <option value="">Select a program</option>
                      {programs.map((program) => (
                        <option key={program} value={program}>{program}</option>
                      ))}
                    </select>
                    {errors.program && <p className="text-destructive text-sm mt-1">{errors.program}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Tell us more about your interests and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-academic"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Content & Image */}
          <div className="fade-in-right">
            <div className="mb-8">
              <img 
                src={graduatesImage} 
                alt="BNIST Graduates"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="academic-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Admission Requirements
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  SSC/Equivalent certificate with minimum GPA 3.0
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  Age limit: 16-25 years at the time of admission
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  Completed application form with required documents
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  Admission test and interview (if required)
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-foreground font-medium">
                  <strong>Application Deadline:</strong> Rolling admission - Apply anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;