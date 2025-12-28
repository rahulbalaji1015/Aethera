import { Briefcase, Heart, Coffee, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      type: 'Full-time',
      location: 'Remote / New York',
      dept: 'Engineering',
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'London',
      dept: 'Design',
    },
    {
      title: 'AI Engineer',
      type: 'Contract',
      location: 'Remote',
      dept: 'Data Science',
    },
    {
      title: 'Product Manager',
      type: 'Full-time',
      location: 'Singapore',
      dept: 'Product',
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Build the future with us. We're looking for passionate minds to solve complex problems.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Work With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere in the world. We focus on output, not hours.' },
              { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health insurance and wellness stipends.' },
              { icon: Briefcase, title: 'Growth', desc: 'Learning budget for courses, conferences, and certifications.' },
              { icon: Coffee, title: 'Flexible Culture', desc: 'Flexible working hours and a supportive team environment.' },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white text-primary shadow-sm mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Open Roles</h2>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-shadow">
                <div className="mb-4 sm:mb-0 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <div className="text-gray-500 text-sm mt-1 space-x-4">
                    <span>{job.dept}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-2 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
             <p className="text-gray-600">Don't see a role that fits? <Link to="/contact" className="text-primary font-bold">Contact us</Link> anyway.</p>
          </div>
        </div>
      </div>
      
      {/* Internship CTA */}
      <div className="bg-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-2xl font-bold text-white mb-4">Looking for an Internship?</h2>
           <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
             We offer a structured internship program for students and recent graduates. Learn from the best and kickstart your career.
           </p>
           <Link to="/contact" className="inline-block bg-white text-dark font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors">
             Apply for Internship
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;
