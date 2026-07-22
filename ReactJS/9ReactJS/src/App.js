import React, { useState } from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  // If-else conditional rendering logic using an element variable
  let playerContent;
  if (flag) {
    playerContent = <ListofPlayers />;
  } else {
    playerContent = <IndianPlayers />;
  }

  return (
    <div style={{
      maxWidth: '850px',
      margin: '40px auto',
      padding: '30px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e2e8f0'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#1a365d',
        marginBottom: '20px'
      }}>
        Cricket Application (ES6 Demo)
      </h1>

      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        padding: '15px',
        backgroundColor: '#f7fafc',
        borderRadius: '8px',
        border: '1px solid #edf2f7'
      }}>
        <p style={{ color: '#4a5568', margin: '0 0 10px 0', fontSize: '15px' }}>
          Current Flag State: <strong style={{ color: flag ? '#3182ce' : '#dd6b20' }}>{flag.toString().toUpperCase()}</strong>
        </p>
        <button
          onClick={() => setFlag(!flag)}
          style={{
            backgroundColor: flag ? '#3182ce' : '#dd6b20',
            color: '#ffffff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            outline: 'none'
          }}
        >
          Toggle Component (Set Flag to {!flag ? 'TRUE' : 'FALSE'})
        </button>
      </div>

      <div style={{ padding: '10px 0' }}>
        {playerContent}
      </div>
    </div>
  );
}

export default App;
