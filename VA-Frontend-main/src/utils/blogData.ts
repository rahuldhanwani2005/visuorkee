export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications.</p>
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the way we write code. From GitHub Copilot to ChatGPT, AI-powered tools are becoming indispensable for developers.</p>
      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to gain traction as they bridge the gap between web and native applications.</p>
      <h2>3. WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance applications in the browser by allowing developers to run code at near-native speed.</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read',
    tags: ['Web Development', 'Trends', 'AI', 'PWA']
  },
  {
    id: 2,
    slug: 'design-systems-guide',
    title: 'Building Scalable Design Systems: A Complete Guide',
    excerpt: 'Learn how to create and maintain design systems that scale with your organization and improve consistency.',
    content: '<p>Full blog post content for Design Systems Guide...</p>',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read',
    tags: ['Design Systems', 'UI/UX', 'Scalability']
  },
  {
    id: 3,
    slug: 'video-marketing-strategies',
    title: 'Video Marketing Strategies That Convert in 2024',
    excerpt: 'Discover proven video marketing techniques that drive engagement and boost conversions for your business.',
    content: '<p>Full blog post content for Video Marketing Strategies...</p>',
    author: 'David Kim',
    date: '2024-01-05',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1574717024621-6becaaa0d4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read',
    tags: ['Video Marketing', 'Conversion', 'Strategy']
  },
  {
    id: 4,
    slug: 'ux-research-methods',
    title: 'Essential UX Research Methods Every Designer Should Know',
    excerpt: 'A comprehensive overview of user research methods and when to use them for maximum impact.',
    content: '<p>Full blog post content for UX Research Methods...</p>',
    author: 'Michael Chen',
    date: '2023-12-28',
    category: 'UX Research',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read',
    tags: ['UX Research', 'User Testing', 'Design Process']
  },
  {
    id: 5,
    slug: 'brand-identity-essentials',
    title: 'Brand Identity Essentials: Creating Memorable Visual Brands',
    excerpt: 'Learn the fundamental principles of creating strong brand identities that resonate with your target audience.',
    content: '<p>Full blog post content for Brand Identity Essentials...</p>',
    author: 'Sarah Johnson',
    date: '2023-12-20',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '9 min read',
    tags: ['Branding', 'Visual Identity', 'Logo Design']
  },
  {
    id: 6,
    slug: 'performance-optimization-tips',
    title: 'Web Performance Optimization: Speed Up Your Site',
    excerpt: 'Practical tips and techniques to improve your website\'s loading speed and overall performance.',
    content: '<p>Full blog post content for Performance Optimization...</p>',
    author: 'Michael Chen',
    date: '2023-12-15',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '10 min read',
    tags: ['Performance', 'Optimization', 'Web Development']
  },
  {
    id: 7,
    slug: 'minimalist-design-trends',
    title: 'Minimalist Design Trends: Less is More',
    excerpt: 'How minimalism is shaping modern user interfaces and why it works for complex applications.',
    content: '<p>Full blog post content for Minimalist Design Trends...</p>',
    author: 'Emily Rodriguez',
    date: '2024-02-01',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read',
    tags: ['Minimalism', 'UI Design', 'Simplicity']
  },
  {
    id: 8,
    slug: 'social-media-engagement',
    title: 'Boosting Social Media Engagement: A 2024 Checklist',
    excerpt: 'Key strategies to keep your audience engaged and growing across all social platforms.',
    content: '<p>Full blog post content for Social Media Engagement...</p>',
    author: 'David Kim',
    date: '2024-02-05',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read',
    tags: ['Social Media', 'Engagement', 'Marketing']
  },
  {
    id: 9,
    slug: 'user-interview-techniques',
    title: 'Mastering User Interview Techniques',
    excerpt: 'How to ask the right questions and extract valuable insights from your users.',
    content: '<p>Full blog post content for User Interview Techniques...</p>',
    author: 'Michael Chen',
    date: '2024-02-10',
    category: 'UX Research',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read',
    tags: ['UX Research', 'User Interviews', 'Qualitative']
  },
  {
    id: 10,
    slug: 'logo-evolution-history',
    title: 'The Evolution of Modern Logo Design',
    excerpt: 'Tracking how major brands have evolved their visual identities over the decades.',
    content: '<p>Full blog post content for Logo Evolution History...</p>',
    author: 'Sarah Johnson',
    date: '2024-02-15',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read',
    tags: ['Branding', 'Logo Design', 'History']
  },
  {
    id: 11,
    slug: 'typography-in-ui',
    title: 'Typography in UI: Why it Matters',
    excerpt: 'The psychological impact of typography and how to choose the right fonts for your interface.',
    content: '<p>Full blog post content for Typography in UI...</p>',
    author: 'Emily Rodriguez',
    date: '2024-02-20',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read',
    tags: ['Typography', 'UI Design', 'Fonts']
  },
  {
    id: 12,
    slug: 'content-marketing-roi',
    title: 'Measuring Content Marketing ROI',
    excerpt: 'How to track and prove the value of your content marketing efforts with real data.',
    content: '<p>Full blog post content for Content Marketing ROI...</p>',
    author: 'David Kim',
    date: '2024-02-25',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '9 min read',
    tags: ['Marketing', 'ROI', 'Analytics']
  },
  {
    id: 13,
    slug: 'accessibility-in-ux',
    title: 'The Importance of Accessibility in UX Research',
    excerpt: 'Ensuring your products are usable by everyone through inclusive research practices.',
    content: '<p>Full blog post content for Accessibility in UX...</p>',
    author: 'Michael Chen',
    date: '2024-03-01',
    category: 'UX Research',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read',
    tags: ['UX Research', 'Accessibility', 'Inclusion']
  },
  {
    id: 14,
    slug: 'brand-voice-guide',
    title: 'Developing a Unique Brand Voice',
    excerpt: 'How to create a consistent and authentic voice that reflects your brand values.',
    content: '<p>Full blog post content for Brand Voice Guide...</p>',
    author: 'Sarah Johnson',
    date: '2024-03-05',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read',
    tags: ['Branding', 'Copywriting', 'Voice']
  }
];
