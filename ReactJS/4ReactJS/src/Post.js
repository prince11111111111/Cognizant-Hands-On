import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Slice the data to show first 10 posts for better UI readability
        this.setState({ posts: data.slice(0, 10) });
      })
      .catch(error => {
        alert('Error loading posts: ' + error.message);
        this.setState({ error: error.message });
      });
  }

  componentDidCatch(error, info) {
    alert('Error caught in Posts Component: ' + error.message);
    this.setState({ error: error.message });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '20px', color: '#721c24', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '5px' }}>
          <h3>An Error Occurred</h3>
          <p>{this.state.error}</p>
        </div>
      );
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #eaeaea', paddingBottom: '10px', textAlign: 'center' }}>
          Latest Blog Posts
        </h1>
        <div className="posts-list">
          {this.state.posts.map(post => (
            <div key={post.id} style={{
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '20px',
              margin: '15px 0',
              backgroundColor: '#f8fafc',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
            }}>
              <h2 style={{ color: '#1a365d', fontSize: '20px', marginTop: 0 }}>{post.title}</h2>
              <p style={{ color: '#4a5568', lineHeight: '1.6', margin: '10px 0 0 0' }}>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
