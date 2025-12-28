import { Shield, Lock, Eye, Server } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 px-8 py-12 text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Privacy Policy</h1>
            <p className="mt-4 text-xl text-blue-100">
              Your privacy is important to us. We are committed to protecting your personal data.
            </p>
          </div>
          
          <div className="px-8 py-12 space-y-12">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Contact information (name, email, phone number)</li>
                <li>Professional information (company name, job title)</li>
                <li>Communications and correspondence</li>
                <li>Usage data and technical information</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Eye className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Aethera and our users.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Lock className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Data Security</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Server className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Data Retention</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-gray-500 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
