import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Clock, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { blogPosts } from '../utils/blogData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'Web Development',
    'Design',
    'Marketing',
    'UX Research',
    'Branding'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = (selectedCategory === 'all' && !searchTerm) ? filteredPosts.slice(1) : filteredPosts;

  return (
    <PageTransition>
      <div className="bg-[#030712] min-h-screen pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative mb-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-bold mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span>The Journal</span>
              </motion.div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Journal</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                Exploring the intersection of creativity, technology, and strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-20">
          <div className="container mx-auto px-4">
            <div className="glass-panel p-4 rounded-[32px] border border-gray-800 flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 w-full max-w-md group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-gray-900/50 border border-transparent rounded-[20px] text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/30 focus:bg-gray-900 transition-all duration-300"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-400 text-gray-900 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {selectedCategory === 'all' && !searchTerm && featuredPost && (
          <section className="mb-24">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-[2px] w-12 bg-cyan-400"></div>
                  <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white">Featured Story</h2>
                </div>
                
                <div className="group relative glass-panel rounded-[40px] overflow-hidden border border-gray-800 hover:border-cyan-400/30 transition-all duration-500 glare-hover">
                  <Link to={`/blog/${featuredPost.slug}`} className="block h-full">
                    <div className="grid lg:grid-cols-3">
                      <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-1 overflow-hidden">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/40 to-transparent"></div>
                      </div>
                      <div className="p-10 lg:p-16 lg:col-span-2 flex flex-col justify-center">
                        <div className="flex items-center space-x-6 text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">
                           <span className="flex items-center text-cyan-400">
                            <Clock className="h-4 w-4 mr-2" />
                            {featuredPost.readTime}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 group-hover:text-cyan-400 transition-colors leading-tight">
                          {featuredPost.title}
                        </h3>
                        
                        <p className="text-2xl text-gray-300 mb-10 font-normal leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400 border border-gray-700">
                              <User className="h-5 w-5" />
                            </div>
                            <span className="text-white font-bold">{featuredPost.author}</span>
                          </div>
                          <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                            <ArrowRight className="h-8 w-8 text-gray-900" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[21/9] rounded-[32px] overflow-hidden mb-6 border border-gray-800 group-hover:border-cyan-400/50 transition-all duration-500 premium-card">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 right-6">
                        <span className="px-4 py-2 bg-gray-950/80 backdrop-blur-md text-cyan-400 rounded-xl text-xs font-black uppercase tracking-widest border border-gray-800">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="px-2">
                      <div className="flex items-center space-x-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-4xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-100 text-xl mb-8 font-normal leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-cyan-400 font-black text-sm uppercase tracking-[0.2em] group">
                        <span>Read Article</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-32 bg-gray-900/20 rounded-[40px] border border-dashed border-gray-800">
                <Search className="h-16 w-16 text-gray-700 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">No results found</h3>
                <p className="text-gray-400 max-w-sm mx-auto">We couldn't find any articles matching your criteria. Try different keywords.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;