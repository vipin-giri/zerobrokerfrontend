import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      category: "Living Room",
      title: "Private Contemporary Home Balancing Openness",
      date: "July 28",
      slug: "private-contemporary-home-balancing"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      category: "Living Room", 
      title: "Private Contemporary Home Balancing Openness",
      date: "July 28",
      slug: "private-contemporary-home-balancing-2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      category: "Living Room",
      title: "Private Contemporary Home Balancing Openness", 
      date: "July 28",
      slug: "private-contemporary-home-balancing-3"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop",
      category: "Living Room",
      title: "Private Contemporary Home Balancing Openness",
      date: "July 28", 
      slug: "private-contemporary-home-balancing-4"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              From Our Blog
            </h2>
            <p className="text-gray-600 text-lg">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <div className="hidden md:block">
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors group">
              See more
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-600 font-medium">
                      {post.date.split(' ')[0]}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {post.date.split(' ')[1]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block text-sm text-gray-500 font-medium mb-3">
                  {post.category}
                </span>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile See More Button */}
        <div className="md:hidden flex justify-center mt-8">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors group bg-white px-6 py-3 rounded-lg shadow-sm">
            See more
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;