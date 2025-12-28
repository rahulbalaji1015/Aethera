import { Code, Database, Server, Cloud, Cpu, Terminal } from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      category: 'Frontend Development',
      icon: Code,
      techs: ['React', 'Angular', 'Vue.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      description: 'Building responsive, interactive, and performant user interfaces.'
    },
    {
      category: 'Backend Development',
      icon: Server,
      techs: ['Node.js', 'Python', 'Java', '.NET Core', 'Go', 'Express'],
      description: 'Robust server-side logic and API development for scalable applications.'
    },
    {
      category: 'Databases',
      icon: Database,
      techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB', 'Elasticsearch'],
      description: 'Secure and efficient data storage solutions for any scale.'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      techs: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      description: 'Infrastructure as code, CI/CD pipelines, and cloud-native architecture.'
    },
    {
      category: 'AI & Machine Learning',
      icon: Cpu,
      techs: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn', 'Pandas', 'Hugging Face'],
      description: 'Intelligent algorithms and models to drive data-driven decision making.'
    },
    {
      category: 'Tools & Utilities',
      icon: Terminal,
      techs: ['Git', 'Jira', 'Postman', 'Figma', 'Slack', 'VS Code'],
      description: 'Essential tools that streamline our workflow and collaboration.'
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Our Tech Stack</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We use the latest and most reliable technologies to build future-proof solutions.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center mr-4">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{cat.category}</h2>
                </div>
                <p className="text-gray-600 mb-6 text-sm h-10">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Certification / Partners Section (Optional) */}
      <div className="bg-gray-50 py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Certified Experts</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale">
              <span className="text-xl font-bold text-gray-500">AWS Certified Solutions Architect</span>
              <span className="text-xl font-bold text-gray-500">Microsoft Certified Professional</span>
              <span className="text-xl font-bold text-gray-500">Google Cloud Certified</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Technologies;
