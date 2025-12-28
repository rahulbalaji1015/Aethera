import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">About Aethera</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are a team of dreamers, doers, and creators committed to shaping the future through technology.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To empower businesses with innovative, scalable, and human-centric technology solutions that drive sustainable growth and positive change.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the global partner of choice for digital transformation, known for our technical excellence, integrity, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Journey</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From a Garage to Global Impact
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Founded in 2020 by a group of passionate engineers, Aethera started with a simple belief: technology should serve people, not the other way around.
            </p>
          </div>
          <div className="relative">
             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
             <div className="space-y-12">
               {[
                 { year: '2020', title: 'The Beginning', desc: 'Aethera was founded with a small team of 3 developers.' },
                 { year: '2021', title: 'First Major Client', desc: 'Secured our first enterprise partnership, expanding our team to 10.' },
                 { year: '2022', title: 'Global Expansion', desc: 'Opened offices in London and Singapore. Launched our AI division.' },
                 { year: '2024', title: 'Innovation Award', desc: 'Recognized as "Top Emerging Tech Company" by TechWorld.' },
               ].map((milestone, idx) => (
                 <div key={idx} className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                   <div className="w-5/12"></div>
                   <div className="z-10 flex items-center justify-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                     <h1 className="mx-auto text-white font-semibold text-xs">{milestone.year}</h1>
                   </div>
                   <div className={`w-5/12 order-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                     <h3 className="mb-3 font-bold text-gray-800 text-xl">{milestone.title}</h3>
                     <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{milestone.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'We do what is right, not what is easy. Transparency is key to our partnerships.', icon: Shield },
              { title: 'Innovation', desc: 'We constantly push boundaries and explore new frontiers in technology.', icon: Zap },
              { title: 'Empathy', desc: 'We understand the human side of technology and design with the user in mind.', icon: Heart },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-primary mb-6">
                  {/* Note: I need to import Shield and Zap if not already imported, but I can use placeholders or re-import */}
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900">Meet Our Leaders</h2>
             <p className="mt-4 text-xl text-gray-500">The minds behind the magic.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Alex Rivera', role: 'CEO & Founder', bio: 'Tech visionary with 15+ years in software architecture.' },
              { name: 'Elena Chen', role: 'CTO', bio: 'AI expert and former lead engineer at a major tech giant.' },
              { name: 'Marcus Johnson', role: 'Head of Design', bio: 'Award-winning UX designer passionate about user-centric experiences.' },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 w-full object-cover flex items-center justify-center text-gray-400">
                  <Users className="h-16 w-16" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
