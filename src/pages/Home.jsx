import { ArrowRight, Code, Cloud, Database, Shield, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Building the Future with <span className="text-blue-200">Intelligent Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
              We transform complex business challenges into scalable, high-performance digital solutions. From AI-driven insights to cloud-native architectures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-40 hover:bg-opacity-50 backdrop-blur-sm transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bridging the gap between <span className="text-primary">Vision</span> and <span className="text-primary">Reality</span>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We don't just write code; we engineer success. By combining cutting-edge technology with deep industry expertise, we deliver solutions that drive measurable growth.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Tech Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Software Development',
                description: 'Tailored solutions built to address your unique business requirements and challenges.',
                icon: Code,
              },
              {
                title: 'Web & Mobile Apps',
                description: 'Engaging, responsive, and user-centric applications for all platforms and devices.',
                icon: Smartphone,
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure, migration, and management on AWS, Azure, and GCP.',
                icon: Cloud,
              },
              {
                title: 'AI & Data Analytics',
                description: 'Unlock the power of your data with advanced machine learning and predictive analytics.',
                icon: Database,
              },
              {
                title: 'IT Consulting',
                description: 'Strategic guidance to help you navigate the digital landscape and optimize operations.',
                icon: Zap,
              },
              {
                title: 'Cybersecurity',
                description: 'Robust security measures to protect your digital assets and ensure compliance.',
                icon: Shield,
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="h-12 w-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-primary font-medium hover:text-primary-dark inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner with Aethera?</h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Innovation First',
                    desc: 'We stay ahead of the curve, adopting the latest technologies to give you a competitive edge.',
                  },
                  {
                    title: 'Scalable Architecture',
                    desc: 'Our solutions are built to grow with your business, ensuring long-term sustainability.',
                  },
                  {
                    title: 'Agile Methodology',
                    desc: 'Iterative development and transparent communication keep projects on track and aligned with your goals.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary mt-1"></div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-400 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-gray-400">Client Retention</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Support Available</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-gray-400">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-500 mb-8">Trusted by companies powered by</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Tech Stack Placeholders - Replace with actual SVGs or Text */}
            {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
              <span key={tech} className="text-2xl font-bold text-gray-400 mx-4">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Aethera transformed our legacy system into a modern, cloud-native platform. The efficiency gains were immediate.",
                author: "Sarah Johnson",
                role: "CTO, FinTech Corp",
              },
              {
                quote: "Their AI expertise helped us uncover insights we didn't know we had. A game-changer for our marketing strategy.",
                author: "Michael Chen",
                role: "Director of Marketing, RetailGiant",
              },
              {
                quote: "Professional, responsive, and incredibly talented. They delivered our mobile app ahead of schedule.",
                author: "David Smith",
                role: "Founder, StartupX",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals. Schedule a consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-md hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
