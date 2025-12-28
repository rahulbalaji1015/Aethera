import { ArrowRight, Check, Server, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Our Products</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovative tools and platforms built to solve real-world problems.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium mb-6 w-fit">
                  SaaS Platform
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">DataFlow Pro</h2>
                <p className="text-lg text-gray-600 mb-8">
                  An all-in-one data analytics dashboard that connects to multiple sources and visualizes your business KPIs in real-time. Say goodbye to manual reporting.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Real-time data synchronization',
                    'Customizable widget dashboard',
                    'Automated PDF reporting',
                    'Role-based access control'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
                    Request Demo
                  </Link>
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 flex items-center justify-center p-12">
                 <div className="bg-white shadow-2xl rounded-lg p-4 w-full h-64 flex items-center justify-center text-gray-400">
                   <Layout className="h-16 w-16 opacity-20" />
                   <span className="ml-2">Dashboard Screenshot Placeholder</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="bg-gray-100 flex items-center justify-center p-12 order-last lg:order-first">
                 <div className="bg-white shadow-2xl rounded-lg p-4 w-full h-64 flex items-center justify-center text-gray-400">
                   <Server className="h-16 w-16 opacity-20" />
                   <span className="ml-2">Admin Panel Screenshot Placeholder</span>
                 </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6 w-fit">
                  Internal Tool
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">OpsManager</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Streamline your internal operations with our custom resource planning and task management tool designed for agile teams.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Resource allocation tracking',
                    'Sprint planning & retrospective',
                    'Integrated time tracking',
                    'Slack & Jira integration'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
