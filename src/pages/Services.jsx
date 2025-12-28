import { Code, Smartphone, Brain, Cloud, PenTool, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: Code,
      description: 'We build robust, scalable, and secure web applications tailored to your business needs.',
      benefits: ['High Performance', 'SEO Optimized', 'Scalable Architecture'],
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      icon: Smartphone,
      description: 'Native and cross-platform mobile apps that deliver seamless user experiences.',
      benefits: ['iOS & Android', 'Intuitive UI', 'Offline Capabilities'],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
    {
      id: 'ai-ml',
      title: 'AI / ML Solutions',
      icon: Brain,
      description: 'Transform your data into actionable insights with our advanced AI and Machine Learning solutions.',
      benefits: ['Predictive Analytics', 'Automation', 'Data Visualization'],
      tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API'],
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Streamline your operations with our cloud migration and DevOps automation services.',
      benefits: ['Cost Efficiency', 'High Availability', 'Continuous Delivery'],
      tech: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: PenTool,
      description: 'Create engaging digital experiences with our user-centered design approach.',
      benefits: ['User Research', 'Prototyping', 'Brand Identity'],
      tech: ['Figma', 'Adobe XD', 'Sketch', 'Tailwind CSS'],
    },
    {
      id: 'consulting',
      title: 'IT Consulting & Support',
      icon: Headphones,
      description: 'Expert advice to help you navigate the complex technology landscape.',
      benefits: ['Strategic Planning', '24/7 Support', 'Security Audits'],
      tech: ['Jira', 'ServiceNow', 'Slack', 'Teams'],
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            End-to-end technology solutions designed to help your business thrive in the digital age.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-primary mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                   <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Tech Stack</h3>
                   <div className="flex flex-wrap gap-2">
                     {service.tech.map((t) => (
                       <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 border border-gray-100 h-80 flex items-center justify-center">
                {/* Placeholder for service illustration/image */}
                <div className="text-center text-gray-400">
                  <service.icon className="h-32 w-32 mx-auto mb-4 opacity-20" />
                  <span className="text-sm">Service Illustration</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
