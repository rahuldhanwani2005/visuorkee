import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Tag, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { blogPosts } from '../utils/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const blogPost = blogPosts.find(p => p.slug === slug);

  if (!blogPost) {
    return <Navigate to="/404" />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === blogPost.category && p.id !== blogPost.id)
    .slice(0, 2);

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blog</span>
              </Link>

              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPost.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blogPost.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPost.readTime}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {blogPost.title}
                </h1>

                <p className="text-xl text-gray-300 mb-8">
                  {blogPost.excerpt}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {blogPost.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center space-x-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share Article</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="prose prose-lg prose-invert max-w-none"
              >
                <div 
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-8 border border-gray-700"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt={blogPost.author}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{blogPost.author}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">Creative Director</p>
                    <p className="text-gray-300">
                      Sarah is a creative director with over 10 years of experience in web development 
                      and design. She's passionate about creating user-centered digital experiences 
                      and staying ahead of industry trends.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Related <span className="text-cyan-400">Articles</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {relatedPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                          <Link to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors flex items-center space-x-1"
                        >
                          <span>Read Article</span>
                          <ArrowLeft className="h-4 w-4 rotate-180" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default BlogPost;