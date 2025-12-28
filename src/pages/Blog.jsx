import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of AI in Enterprise Software',
      excerpt: 'How artificial intelligence is reshaping the landscape of business applications and decision-making processes.',
      author: 'Elena Chen',
      date: 'Mar 15, 2024',
      category: 'AI & ML',
      readTime: '5 min read',
    },
    {
      title: 'Migrating Legacy Systems to the Cloud: A Strategic Guide',
      excerpt: 'Best practices and common pitfalls to avoid when modernizing your infrastructure.',
      author: 'Alex Rivera',
      date: 'Mar 10, 2024',
      category: 'Cloud Computing',
      readTime: '8 min read',
    },
    {
      title: 'Building Scalable Microservices with Node.js',
      excerpt: 'A technical deep dive into architectural patterns for high-performance backend systems.',
      author: 'Sarah Jenkins',
      date: 'Mar 05, 2024',
      category: 'Development',
      readTime: '6 min read',
    },
    {
      title: 'UX Design Trends to Watch in 2024',
      excerpt: 'From glassmorphism to dark mode, exploring the visual styles that will define the year.',
      author: 'Marcus Johnson',
      date: 'Feb 28, 2024',
      category: 'Design',
      readTime: '4 min read',
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Insights & Updates</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Latest news, technology trends, and thought leadership from the Aethera team.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, idx) => (
              <div key={idx} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 w-full object-cover">
                  {/* Placeholder for blog image */}
                  <div className="w-full h-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center text-gray-400">
                    Image Placeholder
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-primary">
                      {post.category}
                    </div>
                    <Link to="#" className="block mt-2">
                      <p className="text-xl font-bold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post.author}</span>
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        <User className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-dark rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest tech insights and company news delivered directly to your inbox. No spam, we promise.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
