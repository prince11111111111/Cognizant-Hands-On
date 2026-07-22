import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'Mastering React 18 Concurrent Mode', category: 'React', readTime: '5 min read' },
    { id: 2, title: 'Understanding ES6 Destructuring Rules', category: 'ES6', readTime: '3 min read' },
    { id: 3, title: 'The Rise of CSS Modules in Modern Layouts', category: 'CSS', readTime: '4 min read' }
  ];

  return (
    <div style={{ padding: '15px 0' }}>
      <h3 style={{ color: '#b7791f', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
        Latest Blog Posts
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
        {blogs.map(blog => (
          <div key={blog.id} style={{
            padding: '15px',
            backgroundColor: '#fffaf0',
            border: '1px solid #feebc8',
            borderRadius: '6px'
          }}>
            <h4 style={{ margin: '0 0 6px 0', color: '#2d3748' }}>{blog.title}</h4>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
              <span style={{
                fontSize: '11px',
                backgroundColor: '#feebc8',
                color: '#c05621',
                padding: '2px 8px',
                borderRadius: '12px',
                fontWeight: '600'
              }}>
                {blog.category}
              </span>
              <span style={{ fontSize: '12px', color: '#a0aec0' }}>•</span>
              <span style={{ fontSize: '12px', color: '#718096' }}>{blog.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
