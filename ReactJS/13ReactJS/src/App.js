import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [activeView, setActiveView] = useState('books');
  const [showSummary, setShowSummary] = useState(true);

  // Method 1: Element Variables (if-else)
  let activeComponent;
  if (activeView === 'books') {
    activeComponent = <BookDetails />;
  } else if (activeView === 'blogs') {
    activeComponent = <BlogDetails />;
  } else if (activeView === 'courses') {
    activeComponent = <CourseDetails />;
  }

  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f7fafc',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '35px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#1a365d',
          margin: '0 0 10px 0',
          fontWeight: '700'
        }}>
          Academy Blogger Workspace
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#718096',
          margin: '0 0 35px 0',
          fontSize: '15px'
        }}>
          Demonstrating Multiple Patterns of React Conditional Rendering
        </p>

        {/* Tab Selection Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '30px',
          borderBottom: '1px solid #edf2f7',
          paddingBottom: '20px'
        }}>
          <button
            onClick={() => setActiveView('books')}
            style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: activeView === 'books' ? 'none' : '1px solid #cbd5e0',
              backgroundColor: activeView === 'books' ? '#3182ce' : 'transparent',
              color: activeView === 'books' ? '#ffffff' : '#4a5568',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Book Details (Element Var)
          </button>
          <button
            onClick={() => setActiveView('blogs')}
            style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: activeView === 'blogs' ? 'none' : '1px solid #cbd5e0',
              backgroundColor: activeView === 'blogs' ? '#b7791f' : 'transparent',
              color: activeView === 'blogs' ? '#ffffff' : '#4a5568',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Blog Details (Logical &&)
          </button>
          <button
            onClick={() => setActiveView('courses')}
            style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: activeView === 'courses' ? 'none' : '1px solid #cbd5e0',
              backgroundColor: activeView === 'courses' ? '#276749' : 'transparent',
              color: activeView === 'courses' ? '#ffffff' : '#4a5568',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Course Details (Ternary ? :)
          </button>
        </div>

        {/* Method 2: Logical && Operator */}
        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <button
            onClick={() => setShowSummary(!showSummary)}
            style={{
              padding: '6px 12px',
              borderRadius: '4px',
              backgroundColor: '#edf2f7',
              border: '1px solid #cbd5e0',
              color: '#4a5568',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {showSummary ? 'Hide Technical Note' : 'Show Technical Note'}
          </button>
          {showSummary && (
            <div style={{
              marginTop: '10px',
              padding: '12px 18px',
              backgroundColor: '#f7fafc',
              borderLeft: '4px solid #4a5568',
              fontSize: '13px',
              color: '#4a5568',
              textAlign: 'left',
              lineHeight: '1.5'
            }}>
              <strong>Logical && Conditional Rendering:</strong> This box renders only because the state expression <code>showSummary</code> evaluates to truthy, checking the next instruction block.
            </div>
          )}
        </div>

        {/* Displaying Rendered Contents */}
        <div style={{
          padding: '20px',
          border: '1px solid #edf2f7',
          borderRadius: '8px',
          backgroundColor: '#fafafa',
          minHeight: '200px'
        }}>
          {/* Render Method A: Element Variables (For Books) */}
          {activeView === 'books' && activeComponent}

          {/* Render Method B: Logical && (For Blogs) */}
          {activeView === 'blogs' && <BlogDetails />}

          {/* Render Method C: Ternary Operator (For Courses) */}
          {activeView === 'courses' ? <CourseDetails /> : null}
        </div>

        {/* Method 3: Inline IIFE (Immediately Invoked Function Expression) */}
        <div style={{
          marginTop: '30px',
          fontSize: '12px',
          color: '#a0aec0',
          textAlign: 'center',
          borderTop: '1px solid #edf2f7',
          paddingTop: '20px'
        }}>
          {(() => {
            return `Current Active Rendering Context: ${activeView.toUpperCase()}`;
          })()}
        </div>
      </div>
    </div>
  );
}

export default App;
